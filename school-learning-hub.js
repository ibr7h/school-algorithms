/* Book-aligned learning content: 8 units, 26 lessons, 29 code examples. */
const LEARNING_DATA = {
  "units": [
    {
      "id": "u1",
      "title": "مقدمة في بايثون",
      "subtitle": "مفهوم البرنامج والخوارزمية والمخطط الانسيابي والمتغيرات",
      "start": 10,
      "end": 25,
      "number": 1
    },
    {
      "id": "u2",
      "title": "المدخلات والمخرجات والعمليات الحسابية",
      "subtitle": "الإدخال وأنواع البيانات والعمليات والمعاملات",
      "start": 26,
      "end": 37,
      "number": 2
    },
    {
      "id": "u3",
      "title": "الشروط والقرارات",
      "subtitle": "المقارنات والمعاملات المنطقية و if والشروط المتداخلة",
      "start": 38,
      "end": 63,
      "number": 3
    },
    {
      "id": "u4",
      "title": "الحلقات والدوال",
      "subtitle": "حلقات for و while والحلقات المتداخلة وتعريف الدوال",
      "start": 64,
      "end": 85,
      "number": 4
    },
    {
      "id": "u5",
      "title": "القوائم وصفوف البيانات والمكتبات",
      "subtitle": "القوائم والصفوف والدوال والوحدات البرمجية",
      "start": 86,
      "end": 113,
      "number": 5
    },
    {
      "id": "u6",
      "title": "القواميس والقوائم المتداخلة وملفات البيانات",
      "subtitle": "القواميس والقوائم المتداخلة والملفات النصية",
      "start": 114,
      "end": 143,
      "number": 6
    },
    {
      "id": "u7",
      "title": "هياكل البيانات المتقدمة",
      "subtitle": "المصفوفات والمكدس والطابور والقائمة المرتبطة",
      "start": 144,
      "end": 199,
      "number": 7
    },
    {
      "id": "u8",
      "title": "البرمجة الكائنية",
      "subtitle": "الفئات والكائنات والسمات والأساليب والوراثة",
      "start": 200,
      "end": 239,
      "number": 8
    }
  ],
  "lessons": [
    {
      "id": "l01",
      "unit": "u1",
      "title": "ما البرنامج والخوارزمية؟",
      "page": 11,
      "summary": "البرنامج تعليمات لتنفيذ مهمة، والخوارزمية خطوات واضحة ومتسلسلة لحل مشكلة.",
      "steps": [
        "ابدأ بتحديد المشكلة والمدخلات والمخرجات.",
        "اكتب خطوات حل المشكلة بالترتيب.",
        "مثّل الخطوات بالرسم ثم اكتبها بالكود."
      ],
      "quiz": {
        "question": "ما أول خطوة قبل رسم المخطط؟",
        "options": [
          "تحديد المشكلة",
          "اختيار لون الأسهم",
          "كتابة print فقط"
        ],
        "answer": 0,
        "explain": "تحديد المطلوب يسبق اختيار الأشكال أو كتابة الكود."
      },
      "example": "e01"
    },
    {
      "id": "l02",
      "unit": "u1",
      "title": "رموز المخطط الانسيابي",
      "page": 14,
      "summary": "لكل شكل معنى: البداية والنهاية، الإدخال والإخراج، العمليات، واتخاذ القرار.",
      "steps": [
        "الشكل البيضاوي للبداية والنهاية.",
        "متوازي الأضلاع للإدخال والإخراج.",
        "المستطيل للعملية والمعيّن للسؤال ذي الفرعين."
      ],
      "quiz": {
        "question": "أي شكل يمثّل قرارًا بنعم أو لا؟",
        "options": [
          "المعيّن",
          "المستطيل",
          "البيضاوي"
        ],
        "answer": 0,
        "explain": "المعيّن لتمييز سؤال القرار ومساريه."
      },
      "example": "e02"
    },
    {
      "id": "l03",
      "unit": "u1",
      "title": "أول أمر طباعة print",
      "page": 18,
      "summary": "تطبع الدالة print رسالة أو قيمة في نافذة المخرجات.",
      "steps": [
        "ضع النص بين علامتي اقتباس.",
        "جرّب عرض رسالة قصيرة ثم قيمة متغير.",
        "راقب الفرق بين النص والرقم."
      ],
      "quiz": {
        "question": "ما الأمر الصحيح للطباعة؟",
        "options": [
          "print(\"مرحبا\")",
          "input(\"مرحبا\")",
          "if \"مرحبا\""
        ],
        "answer": 0,
        "explain": "الدالة print تعرض النص على الشاشة."
      },
      "example": "e01"
    },
    {
      "id": "l04",
      "unit": "u1",
      "title": "المتغيرات والإسناد",
      "page": 21,
      "summary": "المتغير اسم يشير إلى قيمة يمكن استخدامها أو تغييرها. يستخدم الرمز = للإسناد.",
      "steps": [
        "اختر اسمًا يبدأ بحرف أو شرطة سفلية.",
        "أسند قيمة عددية أو نصية للمتغير.",
        "ادمج القيم أو استخدمها في عملية حسابية."
      ],
      "quiz": {
        "question": "ما ناتج x=15 ثم y=20 ثم x+y؟",
        "options": [
          "35",
          "1520",
          "20"
        ],
        "answer": 0,
        "explain": "عملية الجمع على عددين صحيحين تعطي 35."
      },
      "example": "e03"
    },
    {
      "id": "l05",
      "unit": "u2",
      "title": "دالة إدخال البيانات input",
      "page": 27,
      "summary": "توقف input التنفيذ حتى يكتب المستخدم بياناته. القيمة الناتجة نص ما لم يتم تحويلها.",
      "steps": [
        "اطلب القيمة من المستخدم.",
        "احفظ القيمة في متغير.",
        "اطبع القيمة للتأكد من إدخالها."
      ],
      "quiz": {
        "question": "ما النوع الأولي لقيمة input؟",
        "options": [
          "نص str",
          "عدد int دائمًا",
          "قيمة منطقية"
        ],
        "answer": 0,
        "explain": "تُرجع input نصًا حتى لو كتب المستخدم أرقامًا."
      },
      "example": "e05"
    },
    {
      "id": "l06",
      "unit": "u2",
      "title": "أنواع البيانات والتحويل",
      "page": 28,
      "summary": "تعرّف على int وfloat وstr وbool، وحوّل قيم الإدخال قبل الحساب.",
      "steps": [
        "استخدم int للعدد الصحيح.",
        "استخدم float للعدد العشري.",
        "لا تجمع نصوص الأرقام قبل تحويلها."
      ],
      "quiz": {
        "question": "لجمع رقمين أدخلهما المستخدم تستخدم",
        "options": [
          "int(input())",
          "print(input())",
          "str(input())"
        ],
        "answer": 0,
        "explain": "التحويل إلى int يجعل الجمع حسابيًا."
      },
      "example": "e06"
    },
    {
      "id": "l07",
      "unit": "u2",
      "title": "المعاملات الرياضية",
      "page": 31,
      "summary": "تشمل العمليات + و- و* و/ و**، ويُسنَد الناتج إلى متغير.",
      "steps": [
        "نفّذ عملية على قيمتين.",
        "جرّب أولوية الضرب على الجمع.",
        "اعرض النتيجة باستخدام print."
      ],
      "quiz": {
        "question": "أي معامل يعبّر عن الأس؟",
        "options": [
          "**",
          "^",
          "//"
        ],
        "answer": 0,
        "explain": "في بايثون تستخدم ** للأس."
      },
      "example": "e07"
    },
    {
      "id": "l08",
      "unit": "u3",
      "title": "المعاملات الشرطية والمنطقية",
      "page": 44,
      "summary": "تساعد المقارنات على اختبار تساوي القيم أو كِبرها، وتجمع and وor وnot أكثر من شرط.",
      "steps": [
        "استخدم == للمقارنة لا =.",
        "جرّب >= و<= للحدود.",
        "ادمج شرطين عند الحاجة إلى قرار مركّب."
      ],
      "quiz": {
        "question": "أي تعبير يختبر التساوي؟",
        "options": [
          "x == 5",
          "x = 5",
          "x => 5"
        ],
        "answer": 0,
        "explain": "الرمز == هو معامل اختبار المساواة."
      },
      "example": "e11"
    },
    {
      "id": "l09",
      "unit": "u3",
      "title": "اختيار المسار باستخدام if وelse",
      "page": 48,
      "summary": "ينفَّذ مسار عند تحقق الشرط، ومسار آخر عندما لا يتحقق.",
      "steps": [
        "ضع النقطتين بعد الشرط.",
        "استخدم أربع مسافات داخل كل فرع.",
        "تأكد من الوصول إلى مسار النهاية."
      ],
      "quiz": {
        "question": "ما وظيفة else؟",
        "options": [
          "تنفيذ المسار البديل",
          "تكرار الحلقة",
          "إنشاء متغير"
        ],
        "answer": 0,
        "explain": "else تنفذ عندما لا يتحقق الشرط المقابل."
      },
      "example": "e09"
    },
    {
      "id": "l10",
      "unit": "u3",
      "title": "الشروط المتداخلة",
      "page": 58,
      "summary": "يمكن وضع شرط داخل فرع شرط آخر، مع مراعاة الإزاحة والترتيب.",
      "steps": [
        "ابدأ بسؤال رئيسي.",
        "اكتب سؤالًا ثانيًا داخل الفرع الصحيح.",
        "اختبر جميع الحالات الممكنة."
      ],
      "quiz": {
        "question": "متى يُفحص الشرط الداخلي؟",
        "options": [
          "عند دخول الفرع الذي يحتويه",
          "في جميع الحالات دائمًا",
          "قبل الشرط الخارجي"
        ],
        "answer": 0,
        "explain": "لا يصل التنفيذ إلى الشرط الداخلي إلا بعد دخول فرعه."
      },
      "example": "e10"
    },
    {
      "id": "l11",
      "unit": "u4",
      "title": "حلقة for مع range",
      "page": 65,
      "summary": "تكرّر for تعليمات على مجموعة قيم؛ وrange تحدد سلسلة من الأعداد.",
      "steps": [
        "حدد بداية النطاق ونهايته.",
        "ضع التعليمات داخل جسم الحلقة بإزاحة.",
        "راقب عدد مرات التنفيذ."
      ],
      "quiz": {
        "question": "هل range(1, 4) تتضمن 4؟",
        "options": [
          "لا",
          "نعم",
          "تتوقف عند 1"
        ],
        "answer": 0,
        "explain": "القيمة النهائية في range غير مشمولة."
      },
      "example": "e12"
    },
    {
      "id": "l12",
      "unit": "u4",
      "title": "حلقة while",
      "page": 69,
      "summary": "تكرّر while التعليمات ما دام الشرط صحيحًا، ويلزم تغيير القيم لمنع الدوران اللانهائي.",
      "steps": [
        "هيّئ المتغير قبل الحلقة.",
        "اختبر الشرط.",
        "حدّث المتغير داخل الحلقة."
      ],
      "quiz": {
        "question": "لماذا نغيّر قيمة العداد داخل while؟",
        "options": [
          "ليصبح الشرط غير محقق في وقت ما",
          "لتلوين الكلمات",
          "لتعطيل print"
        ],
        "answer": 0,
        "explain": "دون تحديث قد تبقى الحلقة لا نهائية."
      },
      "example": "e13"
    },
    {
      "id": "l13",
      "unit": "u4",
      "title": "الحلقات المتداخلة",
      "page": 72,
      "summary": "يمكن تضمين حلقة داخل حلقة أخرى لمعالجة قيمتين أو بعدين.",
      "steps": [
        "ميّز العداد الخارجي من الداخلي.",
        "أكمل الحلقة الداخلية في كل تكرار خارجي.",
        "لاحظ ترتيب المخرجات."
      ],
      "quiz": {
        "question": "أين توضع الحلقة الداخلية؟",
        "options": [
          "داخل جسم الحلقة الخارجية",
          "قبل بداية البرنامج",
          "بعد النهاية"
        ],
        "answer": 0,
        "explain": "تكون الحلقة الداخلية جزءًا من جسم الحلقة الخارجية."
      },
      "example": "e14"
    },
    {
      "id": "l14",
      "unit": "u4",
      "title": "تعريف الدوال",
      "page": 79,
      "summary": "تجمع الدالة تعليمات تحت اسم، ويمكن استدعاؤها وإرجاع قيمة باستخدام return.",
      "steps": [
        "عرّف دالة باستخدام def.",
        "مرّر إليها معاملات عند الحاجة.",
        "استدعِ الدالة من البرنامج الرئيس."
      ],
      "quiz": {
        "question": "كيف تُعرَّف دالة جديدة؟",
        "options": [
          "def",
          "while",
          "from"
        ],
        "answer": 0,
        "explain": "تبدأ صياغة الدالة في Python بالكلمة def."
      },
      "example": "e15"
    },
    {
      "id": "l15",
      "unit": "u5",
      "title": "القوائم والفهرسة",
      "page": 88,
      "summary": "القائمة تخزن عدة عناصر يمكن الوصول إليها بأرقام فهرسة تبدأ من الصفر.",
      "steps": [
        "ضع القيم بين [ ].",
        "استخدم الفهرس 0 لأول عنصر.",
        "عدّل عنصرًا ثم اطبع القائمة."
      ],
      "quiz": {
        "question": "ما فهرس العنصر الأول في القائمة؟",
        "options": [
          "0",
          "1",
          "-2"
        ],
        "answer": 0,
        "explain": "الفهرسة في بايثون تبدأ بالصفر."
      },
      "example": "e17"
    },
    {
      "id": "l16",
      "unit": "u5",
      "title": "الصفوف Tuples",
      "page": 90,
      "summary": "الصف يشبه القائمة لكنه لا يسمح بتغيير عناصره بالطريقة المعتادة بعد إنشائه.",
      "steps": [
        "أنشئ صفًا بين أقواس دائرية.",
        "اعرض عنصرًا بفهرسه.",
        "قارنه بالقائمة القابلة للتعديل."
      ],
      "quiz": {
        "question": "أي بنية لا تسمح بتعديل عناصرها مباشرة؟",
        "options": [
          "tuple",
          "list",
          "dict"
        ],
        "answer": 0,
        "explain": "الصف tuple غير قابل للتغيير."
      },
      "example": "e19"
    },
    {
      "id": "l17",
      "unit": "u5",
      "title": "المكتبات والوحدات البرمجية",
      "page": 92,
      "summary": "تتيح المكتبات استعمال دوال جاهزة؛ يستورد البرنامج الوحدة أو دوالًا محددة منها.",
      "steps": [
        "اكتب import اسم_الوحدة.",
        "استخدم دالة أو ثابتًا من الوحدة.",
        "لاحظ الفرق بين المكتبة والدالة."
      ],
      "quiz": {
        "question": "كيف نستورد math؟",
        "options": [
          "import math",
          "def math",
          "print import"
        ],
        "answer": 0,
        "explain": "الاستيراد يتم بالكلمة import."
      },
      "example": "e20"
    },
    {
      "id": "l18",
      "unit": "u6",
      "title": "القواميس Dictionary",
      "page": 115,
      "summary": "القاموس يخزن أزواج مفتاح وقيمة؛ للوصول إلى القيمة تستخدم المفتاح.",
      "steps": [
        "عرّف قاموسًا بين { }.",
        "اقرأ قيمة باستخدام المفتاح.",
        "أضف زوجًا جديدًا ثم اطبع القاموس."
      ],
      "quiz": {
        "question": "كيف نصل إلى قيمة في القاموس؟",
        "options": [
          "بالمفتاح",
          "بحجم الشاشة",
          "بالترتيب فقط"
        ],
        "answer": 0,
        "explain": "المفتاح يحدد قيمة القاموس."
      },
      "example": "e21"
    },
    {
      "id": "l19",
      "unit": "u6",
      "title": "القوائم المتداخلة",
      "page": 123,
      "summary": "يمكن للقائمة أن تحتوي قوائم أخرى لتمثيل صفوف وأعمدة.",
      "steps": [
        "أنشئ قائمة تحتوي قوائم فرعية.",
        "استخدم فهرسين للوصول لعنصر.",
        "طبّق تعديلًا على أحد العناصر."
      ],
      "quiz": {
        "question": "ما الذي يستخدم للوصول لعنصر داخل قائمة متداخلة؟",
        "options": [
          "فهرسان",
          "عدد واحد دائمًا",
          "اسم ملف"
        ],
        "answer": 0,
        "explain": "فهرس أول للقائمة الفرعية وثانٍ للعنصر داخلها."
      },
      "example": "e22"
    },
    {
      "id": "l20",
      "unit": "u6",
      "title": "الملفات النصية",
      "page": 130,
      "summary": "تتيح الملفات حفظ البيانات واسترجاعها خارج ذاكرة البرنامج؛ استخدم with للإغلاق الآمن.",
      "steps": [
        "اكتب بيانات قصيرة إلى ملف.",
        "اقرأ المحتوى من الملف.",
        "ميّز بين نمطي الكتابة والقراءة."
      ],
      "quiz": {
        "question": "ماذا يفعل النمط r؟",
        "options": [
          "قراءة الملف",
          "إنشاء رسم",
          "جمع الأعداد"
        ],
        "answer": 0,
        "explain": "r يفتح الملف للقراءة."
      },
      "example": "e23"
    },
    {
      "id": "l21",
      "unit": "u7",
      "title": "المصفوفات Arrays",
      "page": 145,
      "summary": "تجمع المصفوفات عناصر من نوع موحّد، ويمكن تكرار المرور عليها لحساب متوسط الدرجات.",
      "steps": [
        "عرّف مصفوفة من أعداد صحيحة.",
        "اجمع عناصرها.",
        "اقسم المجموع على عدد العناصر."
      ],
      "quiz": {
        "question": "ماذا تعني i عند تعريف array؟",
        "options": [
          "عدد صحيح",
          "نص",
          "قاموس"
        ],
        "answer": 0,
        "explain": "في وحدة array يمثّل الرمز i نوع العدد الصحيح الموقّع."
      },
      "example": "e24"
    },
    {
      "id": "l22",
      "unit": "u7",
      "title": "المكدس والطابور",
      "page": 152,
      "summary": "المكدس يعمل بمبدأ آخر داخل أول خارج، والطابور أول داخل أول خارج.",
      "steps": [
        "استخدم append للإضافة.",
        "استخرج من نهاية المكدس.",
        "استخرج من بداية الطابور."
      ],
      "quiz": {
        "question": "أي بنية تعمل وفق FIFO؟",
        "options": [
          "الطابور",
          "المكدس",
          "العدد الصحيح"
        ],
        "answer": 0,
        "explain": "FIFO تعني أول داخل أول خارج."
      },
      "example": "e25"
    },
    {
      "id": "l23",
      "unit": "u7",
      "title": "القائمة المرتبطة",
      "page": 179,
      "summary": "تتكون القائمة المرتبطة من عُقد تربط كل عقدة بأخرى، وتختلف عن التخزين المتجاور في المصفوفة.",
      "steps": [
        "أنشئ عقدة تحمل قيمة.",
        "اربط العقدة بالعقدة التالية.",
        "مرّ على العقد حتى تصل إلى النهاية."
      ],
      "quiz": {
        "question": "ماذا تخزن عقدة القائمة المرتبطة؟",
        "options": [
          "بيانات ورابطًا",
          "رقم الشاشة فقط",
          "اسم الملف فقط"
        ],
        "answer": 0,
        "explain": "تحتوي العقدة على قيمة ومؤشر أو مرجع للعقدة التالية."
      },
      "example": "e26"
    },
    {
      "id": "l24",
      "unit": "u8",
      "title": "الفئات والكائنات",
      "page": 204,
      "summary": "الفئة تصف خصائص وسلوك كائنات متشابهة، وتُنشأ باستخدام class.",
      "steps": [
        "عرّف الفئة class.",
        "ضع خصائص الكائن داخل __init__.",
        "أنشئ كائنًا ثم استخدم خصائصه."
      ],
      "quiz": {
        "question": "ما الكلمة المستخدمة لتعريف الفئة؟",
        "options": [
          "class",
          "if",
          "input"
        ],
        "answer": 0,
        "explain": "تعريف الفئة يبدأ بالكلمة class."
      },
      "example": "e27"
    },
    {
      "id": "l25",
      "unit": "u8",
      "title": "الأساليب والخصائص",
      "page": 215,
      "summary": "الأسلوب Method دالة مرتبطة بكائن، ويمكنها قراءة خصائصه والتعامل معها عبر self.",
      "steps": [
        "أنشئ أسلوبًا داخل الفئة.",
        "اقرأ خاصية عبر self.",
        "استدعِ الأسلوب عبر الكائن."
      ],
      "quiz": {
        "question": "كيف يصل الأسلوب إلى خاصية الكائن؟",
        "options": [
          "self",
          "range",
          "else"
        ],
        "answer": 0,
        "explain": "self مرجع إلى الكائن داخل الأساليب الاعتيادية."
      },
      "example": "e28"
    },
    {
      "id": "l26",
      "unit": "u8",
      "title": "الوراثة وإعادة الاستخدام",
      "page": 221,
      "summary": "تسمح الوراثة ببناء فئة متخصصة على أساس فئة عامة مشتركة.",
      "steps": [
        "أنشئ فئة أساسية.",
        "اجعل الفئة الفرعية ترث منها.",
        "أضف أسلوبًا خاصًا بالفئة الفرعية."
      ],
      "quiz": {
        "question": "ماذا تحقق الوراثة؟",
        "options": [
          "إعادة استخدام سلوك الفئة الأساسية",
          "منع كتابة الدوال",
          "إلغاء جميع الخصائص"
        ],
        "answer": 0,
        "explain": "الفئة الفرعية تستطيع الاستفادة من الفئة الأساسية وتوسيعها."
      },
      "example": "e29"
    }
  ],
  "examples": [
    {
      "id": "e01",
      "unit": "u1",
      "title": "أول برنامج: مرحبًا بالعالم",
      "page": 12,
      "code": "print(\"Hello world!\")",
      "convert": true,
      "note": "مطابق لفكرة أول مثال للطباعة.",
      "level": "مبتدئ"
    },
    {
      "id": "e02",
      "unit": "u1",
      "title": "مساحة المستطيل",
      "page": 16,
      "code": "print(\"حساب مساحة المستطيل\")\nlength = int(input(\"الطول: \"))\nwidth = int(input(\"العرض: \"))\narea = length * width\nprint(\"المساحة:\", area)",
      "convert": true,
      "note": "تطبيق على إدخال القيم والحساب وفق مثال الكتاب.",
      "level": "مبتدئ"
    },
    {
      "id": "e03",
      "unit": "u1",
      "title": "إسناد وجمع متغيرين",
      "page": 22,
      "code": "x = 15\ny = 20\ntotal = x + y\nprint(total)",
      "convert": true,
      "note": "قيم ومفهوم الإسناد من مثال الكتاب.",
      "level": "مبتدئ"
    },
    {
      "id": "e04",
      "unit": "u1",
      "title": "مجموع نقاط السباق الثلاثي",
      "page": 24,
      "code": "SwimmingScore = 70\nCyclingScore = 40\nRunningScore = 60\nTriathlonScore = SwimmingScore + CyclingScore + RunningScore\nprint(\"مجموع نقاط السباق الثلاثي:\", TriathlonScore)",
      "convert": true,
      "note": "فكرة المثال التطبيقي للسباق الثلاثي.",
      "level": "مبتدئ"
    },
    {
      "id": "e05",
      "unit": "u2",
      "title": "إدخال قيمة المتغير x",
      "page": 27,
      "code": "print(\"الرجاء إدخال قيمة للمتغير x:\")\nx = input()\nprint(\"قيمة x:\", x)",
      "convert": true,
      "note": "مثال إدخال البيانات وعرضها.",
      "level": "مبتدئ"
    },
    {
      "id": "e06",
      "unit": "u2",
      "title": "جمع عددين مدخلين",
      "page": 28,
      "code": "x = int(input(\"قيمة x: \"))\ny = int(input(\"قيمة y: \"))\ntotal = x + y\nprint(\"مجموع x و y:\", total)",
      "convert": true,
      "note": "تحويل القيم إلى أعداد صحيحة قبل جمعها.",
      "level": "مبتدئ"
    },
    {
      "id": "e07",
      "unit": "u2",
      "title": "الأس والتعبير الجبري",
      "page": 32,
      "code": "a = 2\nb = 3\nx = a ** 2 + 2 * a * b + b ** 2\nprint(\"x =\", x)",
      "convert": true,
      "note": "صياغة التعبير الجبري المستخدم في درس المعاملات.",
      "level": "مبتدئ"
    },
    {
      "id": "e08",
      "unit": "u2",
      "title": "نقاط لاعب السباق الثلاثي",
      "page": 34,
      "code": "name = input(\"اسم الرياضي: \")\nswimming = float(input(\"نقاط السباحة: \"))\ncycling = float(input(\"نقاط الدراجة: \"))\nrunning = float(input(\"نقاط الجري: \"))\nscore = swimming + cycling + running\nprint(name, \"المجموع:\", score)",
      "convert": true,
      "note": "نموذج مختصر من مسألة لعبة السباق الثلاثي.",
      "level": "مبتدئ"
    },
    {
      "id": "e09",
      "unit": "u3",
      "title": "تحديد العدد الموجب",
      "page": 54,
      "code": "x = int(input(\"أدخل x: \"))\nif x > 0:\n    print(\"رقم موجب\")\nelse:\n    print(\"سالب أو صفر\")",
      "convert": true,
      "note": "تعليمات if وelse بناءً على المثال في الكتاب.",
      "level": "متوسط"
    },
    {
      "id": "e10",
      "unit": "u3",
      "title": "تقدير الدرجة بشرط متداخل",
      "page": 61,
      "code": "grade = int(input(\"أدخل الدرجة: \"))\nif grade > 10:\n    print(\"نجحت\")\n    if grade <= 15:\n        print(\"التقدير C\")\n    else:\n        print(\"التقدير B أو أعلى\")\nelse:\n    print(\"لم تنجح\")",
      "convert": true,
      "note": "تبسيط تعليمي لفكرة الشروط المتداخلة؛ ليس نقلًا حرفيًا.",
      "level": "متوسط"
    },
    {
      "id": "e11",
      "unit": "u3",
      "title": "شرط مركب باستخدام and",
      "page": 44,
      "code": "age = 17\nscore = 85\nif age >= 16 and score >= 80:\n    print(\"الشروط متحققة\")\nelse:\n    print(\"الشروط غير متحققة\")",
      "convert": true,
      "note": "تطبيق من فكرة المعاملات المنطقية بالوحدة.",
      "level": "متوسط"
    },
    {
      "id": "e12",
      "unit": "u4",
      "title": "تكرار for وrange",
      "page": 65,
      "code": "for i in range(1, 6):\n    print(i)\nprint(\"انتهى\")",
      "convert": true,
      "note": "مثال تدريبي مبسّط على حلقة for.",
      "level": "متوسط"
    },
    {
      "id": "e13",
      "unit": "u4",
      "title": "حلقة while مع عدّاد",
      "page": 70,
      "code": "i = 1\nwhile i < 6:\n    print(i)\n    i = i + 1\nprint(\"انتهى\")",
      "convert": true,
      "note": "نفس فكرة شرط انتهاء الحلقة كما في الدرس.",
      "level": "متوسط"
    },
    {
      "id": "e14",
      "unit": "u4",
      "title": "حلقتان متداخلتان",
      "page": 73,
      "code": "a = 4\nwhile a <= 12:\n    for i in range(3):\n        print(\"a =\", a, \"i =\", i)\n    a = a + 1",
      "convert": true,
      "note": "يحاكي المثال الخاص بالحلقات المتداخلة.",
      "level": "متوسط"
    },
    {
      "id": "e15",
      "unit": "u4",
      "title": "دالة الترحيب",
      "page": 79,
      "code": "def welcome():\n    print(\"مرحبًا\")\n\nwelcome()",
      "convert": false,
      "note": "الدوال موجودة في الكتاب؛ توليد مخطط كامل لتعريف الدوال ليس مدعومًا حاليًا.",
      "level": "متوسط"
    },
    {
      "id": "e16",
      "unit": "u4",
      "title": "دالة أكبر عدد",
      "page": 81,
      "code": "def maximum(x, y):\n    if x > y:\n        return x\n    elif y > x:\n        return y\n    return \"العددان متساويان\"\n\nprint(maximum(2, 3))",
      "convert": false,
      "note": "مستوحى من مثال الدالة التي تعيد القيمة الأكبر.",
      "level": "متوسط"
    },
    {
      "id": "e17",
      "unit": "u5",
      "title": "تعريف قائمة وعرضها",
      "page": 88,
      "code": "fruits = [\"apple\", \"orange\", \"banana\"]\nprint(fruits)",
      "convert": false,
      "note": "القوائم من الوحدة الخامسة؛ لا يدعم المحوّل بعد عمليات القوائم بصورة كاملة.",
      "level": "متوسط"
    },
    {
      "id": "e18",
      "unit": "u5",
      "title": "التكرار على قائمة",
      "page": 89,
      "code": "fruits = [\"apple\", \"orange\", \"banana\"]\nfor fruit in fruits:\n    print(fruit)",
      "convert": false,
      "note": "التكرار على عناصر قائمة مباشرة مختلف عن range في المحوّل الحالي.",
      "level": "متوسط"
    },
    {
      "id": "e19",
      "unit": "u5",
      "title": "عناصر الصف Tuple",
      "page": 91,
      "code": "fruits = (\"apple\", \"orange\", \"banana\")\nprint(fruits[1])",
      "convert": false,
      "note": "إظهار الفهرسة في الصفوف.",
      "level": "متوسط"
    },
    {
      "id": "e20",
      "unit": "u5",
      "title": "استخدام مكتبة math",
      "page": 95,
      "code": "import math\nprint(math.pi)\nprint(math.sqrt(16))",
      "convert": false,
      "note": "تعريف باستخدام وحدة مكتبة بايثون القياسية.",
      "level": "متوسط"
    },
    {
      "id": "e21",
      "unit": "u6",
      "title": "قاموس الطلاب",
      "page": 119,
      "code": "students = {154327: \"Khalid\", 154876: \"Saad\"}\nstudents[174527] = \"Ahmed\"\nprint(students)",
      "convert": false,
      "note": "مفهوم قاموس الأرقام والأسماء كما في الكتاب.",
      "level": "متقدم"
    },
    {
      "id": "e22",
      "unit": "u6",
      "title": "قائمة درجات وتعديلها",
      "page": 127,
      "code": "grades = [89, 88, 98, 95]\ngrades.append(100)\ngrades.remove(88)\nprint(grades)",
      "convert": false,
      "note": "عمليات تعديل القائمة من أمثلة الوحدة السادسة.",
      "level": "متقدم"
    },
    {
      "id": "e23",
      "unit": "u6",
      "title": "قراءة ملف نصي",
      "page": 134,
      "code": "with open(\"file.txt\", \"r\", encoding=\"utf-8\") as f:\n    print(f.read())",
      "convert": false,
      "note": "يتطلب وجود ملف فعلي؛ مثال قراءة ملفات كما في الكتاب.",
      "level": "متقدم"
    },
    {
      "id": "e24",
      "unit": "u7",
      "title": "متوسط عناصر مصفوفة",
      "page": 148,
      "code": "from array import array\ngrades = array(\"i\", [85, 92, 80, 87])\ntotal = 0\nfor grade in grades:\n    total = total + grade\naverage = total / len(grades)\nprint(\"average grade =\", average)",
      "convert": false,
      "note": "يبني على مثال حساب متوسط الدرجات بالمصفوفة.",
      "level": "متقدم"
    },
    {
      "id": "e25",
      "unit": "u7",
      "title": "الفرق بين المكدس والطابور",
      "page": 152,
      "code": "from collections import deque\nstack = [1, 2, 3]\nprint(\"Stack:\", stack.pop())\nqueue = deque([1, 2, 3])\nprint(\"Queue:\", queue.popleft())",
      "convert": false,
      "note": "مثال توضيحي مُعدّ للتطبيق على مفهومي LIFO وFIFO؛ ليس نصًا من الكتاب.",
      "level": "متقدم"
    },
    {
      "id": "e26",
      "unit": "u7",
      "title": "عقدة في قائمة مرتبطة",
      "page": 179,
      "code": "class Node:\n    def __init__(self, value):\n        self.value = value\n        self.next = None\n\nfirst = Node(10)\nsecond = Node(20)\nfirst.next = second\nprint(first.next.value)",
      "convert": false,
      "note": "مثال توضيحي مستلهم من مفهوم القائمة المرتبطة.",
      "level": "متقدم"
    },
    {
      "id": "e27",
      "unit": "u8",
      "title": "إنشاء فئة Cat",
      "page": 205,
      "code": "class Cat:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\ncat = Cat(\"Milo\", 2)\nprint(cat.name)",
      "convert": false,
      "note": "تبسيط من فكرة فئة القطة المبيّنة في الكتاب.",
      "level": "متقدم"
    },
    {
      "id": "e28",
      "unit": "u8",
      "title": "خصائص وأساليب فئة Horse",
      "page": 215,
      "code": "class Horse:\n    def __init__(self, breed, color):\n        self.breed = breed\n        self.color = color\n\n    def run(self):\n        return \"I am running\"\n\nhorse = Horse(\"Arabian\", \"Brown\")\nprint(horse.run())",
      "convert": false,
      "note": "نموذج مبسط من مثال الحصان في الكتاب.",
      "level": "متقدم"
    },
    {
      "id": "e29",
      "unit": "u8",
      "title": "وراثة الفئات",
      "page": 223,
      "code": "class Vehicle:\n    def move(self):\n        print(\"Moving\")\n\nclass Car(Vehicle):\n    def drive(self):\n        print(\"Driving\")\n\ncar = Car()\ncar.move()\ncar.drive()",
      "convert": false,
      "note": "مثال تعليمي مستقل عن النص الحرفي لشرح الوراثة.",
      "level": "متقدم"
    }
  ]
};

(() => {
  'use strict';
  const doc = document;
  const STORE = 'school-algorithms-learning-progress-v1';
  const ICON = {
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    arrow: '<path d="M19 12H5m7 7-7-7 7-7"/>',
    play: '<polygon points="7 4 20 12 7 20 7 4"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>'
  };
  const svg = (name) => '<svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true">' + (ICON[name] || ICON.book) + '</svg>';
  const safe = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const unitFor = (id) => LEARNING_DATA.units.find(u => u.id === id);
  const findLesson = (id) => LEARNING_DATA.lessons.find(l => l.id === id);
  const findExample = (id) => LEARNING_DATA.examples.find(l => l.id === id);
  const current = { tab:'learn', unit:'u1', query:'', filter:'all', selectedLesson:'l01', selectedExample:'e01', answered:{}, learned:new Set() };
  let modal = null;
  let restoreFocus = null;

  function loadProgress() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE) || '{}');
      const valid = new Set(LEARNING_DATA.lessons.map(l => l.id));
      if (Array.isArray(raw.learned)) current.learned = new Set(raw.learned.filter(id => valid.has(id)));
    } catch (_) { current.learned = new Set(); }
  }
  function saveProgress() {
    try { localStorage.setItem(STORE, JSON.stringify({learned:Array.from(current.learned)})); }
    catch (_) { /* Private mode may disallow local storage; learning remains usable. */ }
  }
  function showHub(tab='learn') {
    if (!modal) return;
    if (typeof window.closeMobileTools === 'function') window.closeMobileTools();
    restoreFocus = doc.activeElement;
    current.tab = tab === 'codes' ? 'codes' : 'learn';
    modal.hidden = false;
    doc.body.classList.add('school-hub-open');
    const search = modal.querySelector('#school-hub-search');
    search.value = current.query;
    render();
    modal.querySelector('#school-hub-close')?.focus({preventScroll:true});
  }
  function closeHub() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    doc.body.classList.remove('school-hub-open');
    restoreFocus?.focus?.({preventScroll:true});
    restoreFocus = null;
  }
  function injectButtons() {
    const desktop = doc.getElementById('project-controls');
    if (desktop && !doc.getElementById('school-learning-open')) {
      const learn = doc.createElement('button');
      learn.id='school-learning-open'; learn.type='button'; learn.className='project-action-btn school-hub-open-button';
      learn.innerHTML = svg('book') + '<span class="button-label">تعلّم</span>';
      learn.setAttribute('title','المنهج التدريجي بحسب الكتاب'); learn.setAttribute('aria-label','فتح قسم تعلّم');
      learn.addEventListener('click',()=>showHub('learn'));
      const codes = doc.createElement('button');
      codes.id='school-codes-open';codes.type='button';codes.className='project-action-btn school-hub-open-button';
      codes.innerHTML=svg('code') + '<span class="button-label">أكواد جاهزة</span>';
      codes.setAttribute('title','استعراض الأكواد المربوطة بدروس الكتاب'); codes.setAttribute('aria-label','فتح الأكواد الجاهزة');
      codes.addEventListener('click',()=>showHub('codes'));
      desktop.prepend(codes);desktop.prepend(learn);
    }
    const mobile = doc.getElementById('mobile-app-header');
    if (mobile && !doc.getElementById('school-learning-mobile')) {
      const learn = doc.createElement('button');
      learn.type='button';learn.id='school-learning-mobile';learn.className='school-hub-open-button mobile-head';
      learn.innerHTML=svg('book')+'<span class="button-label">تعلّم</span>';
      learn.setAttribute('aria-label','قسم تعلّم'); learn.setAttribute('title','تعلّم من الكتاب');
      learn.addEventListener('click',()=>showHub('learn'));
      mobile.appendChild(learn);
    }
  }
  function modalHtml() {
    return `<div class="school-hub-shell" role="dialog" aria-modal="true" aria-labelledby="school-hub-title">
      <header class="school-hub-head">
        <div class="school-hub-brand">${svg('book')}</div>
        <div class="school-hub-headings"><h2 id="school-hub-title">تعلّم بايثون خطوة بخطوة</h2>
          <p>المسارات الدراسية والأمثلة مرتبة بحسب كتاب «متطلب البرمجة بلغة Python»</p></div>
        <button id="school-hub-close" class="school-hub-close" type="button" aria-label="إغلاق">×</button>
      </header>
      <nav class="school-hub-head-nav" aria-label="أقسام المكتبة">
        <button id="school-hub-tab-learn" class="school-hub-tab" role="tab" type="button">${svg('book')} تعلّم</button>
        <button id="school-hub-tab-codes" class="school-hub-tab" role="tab" type="button">${svg('code')} أكواد جاهزة</button>
        <div class="school-hub-progress" id="school-hub-progress"></div>
      </nav>
      <div class="school-hub-main">
        <aside class="school-hub-units" id="school-hub-units" aria-label="وحدات الكتاب"></aside>
        <section class="school-hub-work" aria-label="محتوى التعلم">
          <div class="school-hub-tools"><input id="school-hub-search" class="school-hub-search" type="search" placeholder="ابحث عن درس أو مثال..." aria-label="البحث في الدروس والأكواد">
            <select id="school-hub-filter" class="school-hub-filter" aria-label="تصفية الأكواد">
              <option value="all">جميع الأمثلة</option><option value="convertible">قابل للتحويل لمخطط</option><option value="editor">للمحرر فقط</option>
            </select>
          </div>
          <div class="school-hub-scroll" id="school-hub-scroll">
            <div id="school-hub-list"></div><div id="school-hub-detail"></div>
          </div>
        </section>
      </div>
    </div>`;
  }
  function renderUnits() {
    const host=modal.querySelector('#school-hub-units');
    const options=current.tab==='codes' ? [{id:'all',title:'جميع الوحدات',number:'•',start:10,end:239},...LEARNING_DATA.units] : LEARNING_DATA.units;
    host.innerHTML = `<div class="school-hub-units-title">${current.tab==='codes'?'مستوى الأكواد':'تسلسل وحدات الكتاب'}</div>` + options.map(u=>{
      const count= current.tab==='learn' ? LEARNING_DATA.lessons.filter(l=>l.unit===u.id).length : LEARNING_DATA.examples.filter(l=>u.id==='all'||l.unit===u.id).length;
      return `<button type="button" class="school-hub-unit" data-unit="${safe(u.id)}" aria-current="${current.unit===u.id}">
        <span class="school-hub-unit-n">${u.number||'★'}</span><span class="school-hub-unit-content"><strong>${safe(u.title)}</strong><small>ص ${u.start}–${u.end} · ${count} ${current.tab==='learn'?'دروس':'أمثلة'}</small></span></button>`;
    }).join('');
  }
  function renderProgress() {
    const done=current.learned.size,total=LEARNING_DATA.lessons.length,p=Math.round(done/total*100);
    modal.querySelector('#school-hub-progress').innerHTML=`<span>${done} من ${total} درسًا</span><div class="school-hub-progress-meter"><i style="width:${p}%"></i></div>`;
  }
  function chosenData() {
    const arr=current.tab==='learn' ? LEARNING_DATA.lessons : LEARNING_DATA.examples;
    const q=current.query.trim().toLowerCase();
    return arr.filter(v=>{
      if(current.unit!=='all'&&v.unit!==current.unit) return false;
      if(current.tab==='codes' && current.filter==='convertible' && !v.convert) return false;
      if(current.tab==='codes' && current.filter==='editor' && v.convert) return false;
      if(q) return [v.title,v.summary,v.note,v.code,unitFor(v.unit)?.title].some(s=>String(s||'').toLowerCase().includes(q));
      return true;
    });
  }
  function renderList(items) {
    const host=modal.querySelector('#school-hub-list');
    const isLearn=current.tab==='learn';
    host.innerHTML = `<div class="school-hub-section-top"><h3>${isLearn?'دروس الوحدة':'مكتبة الأمثلة'}</h3><span>${items.length} ${isLearn?'دروس':'أمثلة'}</span></div>`+
      (items.length ? `<div class="school-hub-cards">`+items.map(v=>{
        const selectId=isLearn?current.selectedLesson:current.selectedExample;
        const flag=isLearn?(current.learned.has(v.id)?'<span class="school-hub-pill ready">✓ مكتمل</span>':'<span class="school-hub-pill">درس</span>'):
          (v.convert?'<span class="school-hub-pill ready">↪ إلى مخطط</span>':'<span class="school-hub-pill codeonly">للمحرر</span>');
        const des=isLearn?v.summary:(v.note||'');
        return `<button type="button" class="school-hub-card" data-select="${safe(v.id)}" aria-current="${selectId===v.id}">
          <span class="school-hub-card-line"><strong>${safe(v.title)}</strong>${flag}</span>
          <span class="school-hub-card-description">${safe(des)}</span><small>الوحدة ${unitFor(v.unit)?.number} · ص ${v.page}</small></button>`;
      }).join('')+'</div>':'<div class="school-hub-empty">لا توجد نتائج تطابق البحث. جرّب تعديل البحث أو الوحدة.</div>');
  }
  function renderDetail(items) {
    const host=modal.querySelector('#school-hub-detail');
    if(!items.length){host.innerHTML='';return;}
    const isLearn=current.tab==='learn';
    let chosen=items.find(v=>v.id===(isLearn?current.selectedLesson:current.selectedExample));
    if(!chosen){chosen=items[0];if(isLearn)current.selectedLesson=chosen.id;else current.selectedExample=chosen.id;}
    if(!isLearn){
      const ex=chosen;
      host.innerHTML=`<article class="school-hub-detail"><header class="school-hub-detail-head"><div class="school-hub-detail-meta"><span>الوحدة ${unitFor(ex.unit).number}</span><span>مرجع الكتاب: ص ${ex.page}</span><span>${safe(ex.level)}</span></div>
        <h4>${safe(ex.title)}</h4><p>${safe(ex.note)}</p></header>
        <div class="school-hub-detail-body">
          <div class="school-hub-section-top"><h5>كود Python</h5><span>${ex.convert?'يمكن فتحه وتحويله لمخطط':'للتعلّم وفتح المحرر فقط'}</span></div>
          <pre class="school-hub-code" id="school-hub-code-block" dir="ltr"></pre>
          <div class="school-hub-actions"><button class="school-hub-action primary" type="button" data-action="open-editor" data-example="${safe(ex.id)}">${svg('code')} فتح في محرر IDLE</button>
            <button class="school-hub-action" type="button" data-action="copy" data-example="${safe(ex.id)}">${svg('copy')} نسخ الكود</button>
            ${ex.convert?`<button class="school-hub-action success" type="button" data-action="draw" data-example="${safe(ex.id)}">${svg('play')} إضافة مخطط لهذا الكود</button>`:''}
          </div><p class="school-hub-note" id="school-hub-inline-status" role="status" aria-live="polite">الأمثلة مصاغة للتعلّم استنادًا إلى موضوعات الكتاب؛ بعضها مبسّط أو معدل ليتوافق مع Python 3. لا يتم تشغيل الكود مباشرة من هذه المكتبة.</p>
        </div></article>`;
      const pre=host.querySelector('#school-hub-code-block'); if(pre)pre.textContent=ex.code;
      return;
    }
    const l=chosen, idx=LEARNING_DATA.lessons.indexOf(l),done=current.learned.has(l.id),answer=current.answered[l.id];
    const choices=l.quiz.options.map((c,i)=>`<button type="button" class="school-hub-choice" data-action="answer" data-lesson="${safe(l.id)}" data-choice="${i}" aria-pressed="${answer===i}">${safe(c)}</button>`).join('');
    const passed=answer===l.quiz.answer;
    host.innerHTML=`<article class="school-hub-detail"><header class="school-hub-detail-head"><div class="school-hub-detail-meta"><span>الوحدة ${unitFor(l.unit).number}</span><span>مرجع الكتاب: ص ${l.page}</span><span>درس ${idx+1} من ${LEARNING_DATA.lessons.length}</span></div><h4>${safe(l.title)}</h4><p>${safe(l.summary)}</p></header>
      <div class="school-hub-detail-body"><h5>خطوات الفهم</h5><ol class="school-hub-steps">${l.steps.map(s=>'<li>'+safe(s)+'</li>').join('')}</ol>
        <div class="school-hub-quiz"><strong>تحقق من فهمك: ${safe(l.quiz.question)}</strong><div class="school-hub-options">${choices}</div>
        ${answer!==undefined?`<p class="school-hub-feedback ${passed?'':'error'}">${passed?'إجابة صحيحة. ':'حاول مرة أخرى. '}${safe(l.quiz.explain)}</p>`:''}</div>
        <div class="school-hub-actions">${l.example?`<button class="school-hub-action primary" type="button" data-action="lesson-example" data-example="${safe(l.example)}">${svg('code')} شاهد المثال البرمجي</button>`:''}
        <button class="school-hub-action ${done?'success':''}" type="button" data-action="complete" data-lesson="${safe(l.id)}">${svg('check')} ${done?'تم إنجاز الدرس':'أنهيت هذا الدرس'}</button>
        </div><p class="school-hub-note">تقدّم التعلم محفوظ محليًا في هذا الجهاز. المرجع: كتاب متطلب البرمجة بلغة Python لنظام المسارات.</p>
      </div></article>`;
  }
  function render(resetScroll=false) {
    if(!modal||modal.hidden)return;
    if(current.tab==='learn'&&current.unit==='all')current.unit='u1';
    modal.querySelector('#school-hub-tab-learn').setAttribute('aria-selected',String(current.tab==='learn'));
    modal.querySelector('#school-hub-tab-codes').setAttribute('aria-selected',String(current.tab==='codes'));
    modal.querySelector('#school-hub-filter').hidden=current.tab==='learn';
    modal.querySelector('#school-hub-filter').value=current.filter;
    modal.querySelector('#school-hub-search').placeholder=current.tab==='learn'?'ابحث عن درس أو مفهوم...':'ابحث عن مثال أو كود...';
    renderUnits();renderProgress();
    const items=chosenData();renderDetail(items);renderList(items);
    if(resetScroll)modal.querySelector('#school-hub-scroll').scrollTop=0;
  }
  function setTab(tab){current.tab=tab;current.unit=tab==='codes'?'all':'u1';current.query='';modal.querySelector('#school-hub-search').value='';render(true);}
  async function copyCode(ex) {
    let copied=false;
    try {await navigator.clipboard.writeText(ex.code);copied=true;}catch(_){}
    if(!copied){
      const tmp=doc.createElement('textarea');tmp.value=ex.code;tmp.style.position='fixed';tmp.style.opacity='0';doc.body.appendChild(tmp);tmp.select();
      try{copied=doc.execCommand('copy');}catch(_){}tmp.remove();
    }
    const status=modal?.querySelector('#school-hub-inline-status');if(status)status.textContent=copied?'تم نسخ الكود.':'تعذر النسخ التلقائي؛ يمكنك تحديد النص من المربع ونسخه.';
  }
  function sendToEditor(ex,draw=false){
    const area=doc.getElementById('python-input-area');
    if(!area){const el=modal.querySelector('#school-hub-inline-status');if(el)el.textContent='لم يُعثر على محرر بايثون في التطبيق.';return;}
    area.value=ex.code;
    const editor=doc.getElementById('python-modal-input');if(editor){editor.value=ex.code;window.updatePythonEditorView?.();}
    closeHub();
    if(draw){
      if(typeof window.convertPythonToFlowchart==='function'){
        Promise.resolve(window.convertPythonToFlowchart('append')).catch(err=>{
          const status=doc.getElementById('python-conversion-status');
          if(status)status.textContent='تعذر تحويل المثال: '+(err?.message||'خطأ غير متوقع');
        });
      }else if(typeof window.openPythonImportModal==='function')window.openPythonImportModal();
    }else if(typeof window.openPythonImportModal==='function')window.openPythonImportModal();
    else area.focus();
  }
  function handleClick(event){
    const unit=event.target.closest('[data-unit]');if(unit){current.unit=unit.dataset.unit;render(true);return;}
    const select=event.target.closest('[data-select]');if(select){if(current.tab==='learn')current.selectedLesson=select.dataset.select;else current.selectedExample=select.dataset.select;renderDetail(chosenData());renderList(chosenData());modal.querySelector('#school-hub-detail')?.scrollIntoView({block:'nearest',behavior:'smooth'});return;}
    const btn=event.target.closest('[data-action]');if(!btn)return;
    const action=btn.dataset.action;
    if(action==='answer') {current.answered[btn.dataset.lesson]=Number(btn.dataset.choice);renderDetail(chosenData());return;}
    if(action==='complete'){
      if(current.learned.has(btn.dataset.lesson))current.learned.delete(btn.dataset.lesson);else current.learned.add(btn.dataset.lesson);
      saveProgress();renderProgress();renderList(chosenData());renderDetail(chosenData());return;
    }
    if(action==='lesson-example'){
      const ex=findExample(btn.dataset.example);if(!ex)return;
      current.tab='codes';current.unit=ex.unit;current.query='';current.filter='all';current.selectedExample=ex.id;
      modal.querySelector('#school-hub-search').value='';render(true);modal.querySelector('#school-hub-detail')?.scrollIntoView({block:'nearest'});return;
    }
    const ex=findExample(btn.dataset.example);if(!ex)return;
    if(action==='copy'){copyCode(ex);return;}
    if(action==='open-editor'){sendToEditor(ex,false);return;}
    if(action==='draw'&&ex.convert){sendToEditor(ex,true);return;}
  }
  function init(){
    if(doc.getElementById('school-hub-overlay'))return;
    loadProgress();
    modal=doc.createElement('div');modal.id='school-hub-overlay';modal.hidden=true;
    modal.innerHTML=modalHtml();doc.body.appendChild(modal);
    injectButtons();
    modal.querySelector('#school-hub-close').addEventListener('click',closeHub);
    modal.querySelector('#school-hub-tab-learn').addEventListener('click',()=>setTab('learn'));
    modal.querySelector('#school-hub-tab-codes').addEventListener('click',()=>setTab('codes'));
    modal.querySelector('#school-hub-search').addEventListener('input',event=>{current.query=event.target.value;render();});
    modal.querySelector('#school-hub-filter').addEventListener('change',event=>{current.filter=event.target.value;render();});
    modal.addEventListener('click',event=>{if(event.target===modal)closeHub();else handleClick(event);});
    doc.addEventListener('keydown',event=>{
      if(!modal||modal.hidden)return;
      if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();closeHub();}
    },true);
    // Avoid accidentally losing overlay focus on mobile keyboard opening; still allow scrolling content.
  }
  if(doc.readyState==='loading')doc.addEventListener('DOMContentLoaded',init,{once:true});else init();
  window.SchoolLearningHub={open:showHub,close:closeHub,getProgress:()=>({done:current.learned.size,total:LEARNING_DATA.lessons.length})};
})();