/* Direction-aware flowchart connectors. Existing user-defined anchor points and bends are preserved. */
(() => {
  'use strict';
  if (typeof window.edgeGeometry !== 'function' || typeof window.closestEdgeAnchor !== 'function') return;
  const oldGeometry = window.edgeGeometry;
  const fmt = n => Number(n.toFixed(2));
  const M = p => `${fmt(p.x)} ${fmt(p.y)}`;
  const center = n => ({x:n.x+n.w/2,y:n.y+n.h/2});
  const V = {right:{x:1,y:0},left:{x:-1,y:0},bottom:{x:0,y:1},top:{x:0,y:-1}};
  const at = (node,side) => {
    const c=center(node),v=V[side];
    const anchor=window.closestEdgeAnchor(node,{x:c.x+v.x*10000,y:c.y+v.y*10000});
    if (!anchor) return c;
    return {x:node.x+node.w*anchor.u,y:node.y+node.h*anchor.v};
  };
  const pinned = (node,anchor) => anchor && Number.isFinite(anchor.u) && Number.isFinite(anchor.v) ?
    {x:node.x+node.w*anchor.u,y:node.y+node.h*anchor.v}:null;
  const portSide = (n,p,hint) => {
    if (!p) return hint;
    const c=center(n),h=Math.max(n.h/2,1),w=Math.max(n.w/2,1);
    const ax=(p.x-c.x)/w,ay=(p.y-c.y)/h;
    if (Math.abs(Math.abs(ax)-Math.abs(ay)) < .12 && hint) return hint;
    return Math.abs(ax)>=Math.abs(ay) ? (ax>=0?'right':'left') : (ay>=0?'bottom':'top');
  };
  function orientation(n1,n2) {
    const a=center(n1),b=center(n2),dx=b.x-a.x,dy=b.y-a.y;
    const gapX=Math.abs(dx)-(n1.w+n2.w)/2;
    const gapY=Math.abs(dy)-(n1.h+n2.h)/2;
    let horizontal;
    if (gapX>12 && gapY<=12) horizontal=true;
    else if (gapY>12 && gapX<=12) horizontal=false;
    else horizontal=(Math.abs(dx)/Math.max(1,(n1.w+n2.w)/2+56)) >=
                      (Math.abs(dy)/Math.max(1,(n1.h+n2.h)/2+56));
    return horizontal?
      {from:dx>=0?'right':'left',to:dx>=0?'left':'right'}:
      {from:dy>=0?'bottom':'top',to:dy>=0?'top':'bottom'};
  }
  const eq=(a,b)=>Math.abs(a-b)<.5;
  function compact(points) {
    const out=[];
    for(const p of points){if(!out.length||!eq(out[out.length-1].x,p.x)||!eq(out[out.length-1].y,p.y))out.push(p);}
    let i=1;
    while(i<out.length-1) {
      const a=out[i-1],b=out[i],c=out[i+1];
      if ((eq(a.x,b.x)&&eq(b.x,c.x)) || (eq(a.y,b.y)&&eq(b.y,c.y)))out.splice(i,1);
      else i++;
    }
    return out;
  }
  const outward=(p,side,by)=>({x:p.x+V[side].x*by,y:p.y+V[side].y*by});
  const horizontal=side=>side==='right'||side==='left';
  const mid=(a,b)=>(a+b)/2;
  const asPath=points=>'M '+M(points[0])+points.slice(1).map(p=>' L '+M(p)).join('');
  function bends(start,end,sSide,tSide,via) {
    const stub=28;
    const s=outward(start,sSide,stub),t=outward(end,tSide,stub);
    if(via && Number.isFinite(via.x)&&Number.isFinite(via.y)) {
      // A dragged waypoint remains the decisive center of a hand-routed connection.
      const points=compact([start,s,{x:via.x,y:s.y},{x:via.x,y:via.y},
                              {x:via.x,y:t.y},t,end]);
      return {points,bend:{x:via.x,y:via.y}};
    }
    const sh=horizontal(sSide),th=horizontal(tSide);
    let middle=[];
    if (sh && th) {
      if (sSide!==tSide && (sSide==='right'?s.x<=t.x:s.x>=t.x)) {
        const x=mid(s.x,t.x);
        middle=[{x,y:s.y},{x,y:t.y}];
      } else {
        // Same-side or crossed anchors need a corridor outside both endpoints.
        const direction=V[sSide].x;
        const x=direction>0?Math.max(s.x,t.x)+36:Math.min(s.x,t.x)-36;
        middle=[{x,y:s.y},{x,y:t.y}];
      }
    } else if (!sh && !th) {
      if (sSide!==tSide && (sSide==='bottom'?s.y<=t.y:s.y>=t.y)) {
        const y=mid(s.y,t.y);
        middle=[{x:s.x,y},{x:t.x,y}];
      } else {
        const direction=V[sSide].y;
        const y=direction>0?Math.max(s.y,t.y)+36:Math.min(s.y,t.y)-36;
        middle=[{x:s.x,y},{x:t.x,y}];
      }
    } else if (sh) {
      middle=[{x:t.x,y:s.y}];
    } else {
      middle=[{x:s.x,y:t.y}];
    }
    const points=compact([start,s,...middle,t,end]);
    const bend=middle.length ? middle[Math.floor((middle.length-1)/2)] :
      {x:mid(start.x,end.x),y:mid(start.y,end.y)};
    return {points,bend};
  }
  function loopGeometry(edge,n1,n2) {
    const a=center(n1),b=center(n2);
    // Existing textbook returns use the right corridor. Freeform loop-backs
    // automatically choose the side where the loop's body is drawn.
    const userSide=edge.via && Number.isFinite(edge.via.x) ?
      (edge.via.x < mid(a.x,b.x)?'left':'right') : null;
    const side=userSide||(edge.routing==='return-right'?'right':a.x<b.x-60?'left':'right');
    const start=pinned(n1,edge.fromAnchor)||at(n1,side);
    const end=pinned(n2,edge.toAnchor)||at(n2,side);
    const preferred=Math.max(n1.x+n1.w,n2.x+n2.w)+78;
    const left=Math.min(n1.x,n2.x)-78;
    const x=edge.via && Number.isFinite(edge.via.x) ?
      (side==='right'?Math.max(Math.max(start.x,end.x)+26,edge.via.x):
                        Math.min(Math.min(start.x,end.x)-26,edge.via.x)) :
      (side==='right'?preferred:left);
    const sSide=portSide(n1,start,side),tSide=portSide(n2,end,side);
    const s=outward(start,sSide,26),t=outward(end,tSide,26);
    const corridor=side==='right' ? Math.max(x,s.x,t.x)+8 : Math.min(x,s.x,t.x)-8;
    // Keep the approach of the arrowhead normal to the destination side.
    const points=compact([start,s,{x:corridor,y:s.y},{x:corridor,y:t.y},t,end]);
    const d=asPath(points);
    return {d,start,end,bend:{x:corridor,y:mid(s.y,t.y)},
      label:{x:mid(start.x,corridor),y:s.y-14},points,loopSide:side};
  }
  window.edgeGeometry=function(edge,n1,n2){
    if(!edge||!n1||!n2)return oldGeometry(edge,n1,n2);
    if(edge.routing==='loop-back'||edge.routing==='return-right')return loopGeometry(edge,n1,n2);
    const sides=orientation(n1,n2);
    const a=pinned(n1,edge.fromAnchor),b=pinned(n2,edge.toAnchor);
    const sSide=portSide(n1,a,sides.from),tSide=portSide(n2,b,sides.to);
    const start=a||at(n1,sSide),end=b||at(n2,tSide);
    const route=bends(start,end,sSide,tSide,edge.via);
    return {d:asPath(route.points),start,end,bend:route.bend,
      label:{x:mid(start.x,end.x),y:mid(start.y,end.y)-12},
      points:route.points,fromSide:sSide,toSide:tSide};
  };
})();