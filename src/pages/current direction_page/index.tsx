import { useLocation } from "react-router-dom";

type b = {
  images_url: {
    jpg: string;
    webp: string;
  };
  content: string;
};

type a = Record<
  c,
  {
    hero: {
      description: string;
      images_url: {
        jpg: string;
        webp: string;
      };
    };
    description_direction: b[];
  }
>;

type c =
  | "test"
  | "personal_training"
  | "dance_mix"
  | "zumba"
  | "oriental"
  | "multidance"
  | "latina"
  | "mma"
  | "kickboxing"
  | "grappling"
  | "box"
  | "work_apparatus"
  | "aqua_aerobics"
  | "aqua_mom"
  | "swimming_adults"
  | "school_competitive_swimming"
  | "childrens_swimming"
  | "infant_swimming"
  | "gym"
  | "step_interval"
  | "pro_jumping"
  | "step_pro"
  | "step"
  | "real_ryder"
  | "les_mills_core"
  | "thinner"
  | "les_mills_grit"
  | "hot_iron_2"
  | "hot_iron_1"
  | "cross_training"
  | "hatha_yoga"
  | "soft_balance"
  | "abs_streth"
  | "pranayama_meditation"
  | "yoga_intensiv_90"
  | "pilates_allegro"
  | "healthy_back"
  | "pilates_mat";

const current_direction_page_data: a = {
  abs_streth: {
    hero: {
      description:
        "<h1>МФР+Stretching</h1><p>МФР+STRETCHING — низкоинтенсивный комплекс упражнений, в котором используются приемы самомассажа. Занятия проводятся с использованием мячей, роллов для пилатеса. Упражнения позволяют расслабить мышцы и фасции, а затем растянуть их.</p>",
      images_url: {
        jpg: "/images/current_direction/abs_streth/result_direct_.jpg",
        webp: "/images/current_direction/abs_streth/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/abs_streth/result_direct_.jpg",
          webp: "/images/current_direction/abs_streth/result_direct_.webp",
        },
        content:
          "<strong>Фитнес-тестирование</strong><b>Продолжительность:</b><span> 55 мин</span><b>Уровень подготовленности:</b><span>для всех</span><b>Возраст:</b><span>взрослые</span><p>МФР+STRETCHING — низкоинтенсивный комплекс упражнений, в котором используются приемы самомассажа. Занятия проводятся с использованием мячей, роллов для пилатеса. Упражнения позволяют расслабить мышцы и фасции, а затем растянуть их.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/abs_streth/result_direct_.jpg",
          webp: "/images/current_direction/abs_streth/result_direct_.webp",
        },
        content:
          "<strong>Польза МФР+Stretching:</strong><ul><li>помогает снять мышечное напряжение и зажимы в теле;</li><li>помогает избавиться от болевых ощущений;</li><li>улучшает кровообращение;</li><li>избавляет от депрессии, беспокойства и бессонницы.</li></ul><p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b> или оставьте заявку.</p>",
      },
    ],
  },
  pranayama_meditation: {
    hero: {
      description:
        "<h1>Пранаяма и медитация</h1><p>Важной частью йоги является работа с дыханием и умом. Именно контроль дыхания позволяет нам успокоить ум во время практики асан, углубить свое понимание движения, работы тела и развить контроль.</p>",
      images_url: {
        jpg: "/images/current_direction/pranayama_meditation/result_direct_.jpg",
        webp: "/images/current_direction/pranayama_meditation/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/pranayama_meditation/result_direct_.jpg",
          webp: "/images/current_direction/pranayama_meditation/result_direct_.webp",
        },
        content:
          "<h2>POWER YOGA</h2><p>Йога не ограничивается работой с телом, а предлагает нам инструменты более тонкой и глубокой работы с сознанием и энергией. В восьми ступенчатой системе йоге такие инструменты или техники относятся к четвертой ступени — Пранаяме.</p><p>Пранаяма — навык контроля Праны (жизненной энергии), через выполнение дыхательных упражнений, направленных на стабилизацию нервной системы, очищения энергетических каналов и развития концентрации.</p><p>На занятии мы будем разбирать и осваивать разные техники Пранаямы, а также медитировать и развивать навыки концентрации.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/pranayama_meditation/result_direct_.jpg",
          webp: "/images/current_direction/pranayama_meditation/result_direct_.webp",
        },
        content:
          "<strong>Ждем вас по субботам в 11.00, зал 2.</strong><br><b>Продолжительность:</b><span> 30 минут</span><br><b>Занятие проводит:</b><span> Наталья Пепик</span><br><p>Необходима предварительная запись через приложение Moreon Fitness.</p><p>Подробности по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  yoga_intensiv_90: {
    hero: {
      description:
        "<h1>YOGA INTENSIV-90</h1><p>Занятия йогой в этой студии предназначены в основном для тех, кто регулярно практикует.</p><p>Занятие состоит из практического блока – интенсивной тренировки, а также теории – последовательного разбора асан, основных понятий и терминов йоги, медитации и дыхательных практик.</p><p>Также возможны занятия йогой для начинающих.</p>",
      images_url: {
        jpg: "/images/current_direction/yoga_intensiv_90/result_direct_.jpg",
        webp: "/images/current_direction/yoga_intensiv_90/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/yoga_intensiv_90/result_direct_.jpg",
          webp: "/images/current_direction/yoga_intensiv_90/result_direct_.webp",
        },
        content:
          "<strong>YOGA INTENSIV-90</strong><br><b>Продолжительность:</b><span> 90 мин</span><br><b>Уровень подготовки:</b><span> Продвинутый</span><br><b>Возраст:</b><span> Взрослые</span><br><p>Занятия в этой студии предназначены в основном для тех, кто регулярно практикует йогу. На занятии мы углубляем свои знания по отстройке и технике выполнения асан, приступаем к освоению сложных асан – стоек и балансов на руках, перевернутых асан, шпагата, прогибов, изучаем и практикуем дыхательные техники, поем мантры.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/yoga_intensiv_90/result_direct_.jpg",
          webp: "/images/current_direction/yoga_intensiv_90/result_direct_.webp",
        },
        content:
          "<strong>Занятие состоит из:</strong><ul><li>практического блока – интенсивной тренировки</li><li>теории – последовательного разбора асан, основных понятий и терминов йоги</li><li>медитации и дыхательных практик</li></ul><p>Записаться можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  pilates_allegro: {
    hero: {
      description:
        "<h1>PILATES ALLEGRO</h1><p>Pilates Allegro — ваш любимый пилатес, только еще круче!</p><p>Рекомендуется всем, у кого проблемы с позвоночником и суставами, кто ведет малоподвижный образ жизни.</p><p>Помогает восстановиться после травм и после родов.</p>",
      images_url: {
        jpg: "/images/current_direction/pilates_allegro/result_direct_.jpg",
        webp: "/images/current_direction/pilates_allegro/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/pilates_allegro/result_direct_.jpg",
          webp: "/images/current_direction/pilates_allegro/result_direct_.webp",
        },
        content:
          "<strong>PILATES ALLEGRO</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Тренажер Pilates Allegro позволяет сочетать упражнения на устойчивость, растяжку, укрепление опорно-двигательного аппарата. Эксклюзивность этой программы заключается в том, что нагрузка на позвоночник минимальная, при этом мышцы тела укрепляются и восстанавливаются.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/pilates_allegro/result_direct_.jpg",
          webp: "/images/current_direction/pilates_allegro/result_direct_.webp",
        },
        content:
          "<strong>Результаты занятий на тренажере Allegro:</strong><ul><li>Улучшает осанку</li><li>Укрепляет опорно-двигательный аппарат</li><li>Тренирует выносливость</li><li>Нормализует дыхание</li></ul><p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  healthy_back: {
    hero: {
      description:
        "<h1>Здоровая спина</h1><p>Проблемы со спиной есть почти у каждого офисного работника. Занятия «Здоровая спина» помогут снять напряжение, убрать сутулость и поддерживать красивую осанку. Уже после первого занятия вы почувствуете облегчение, уйдут боли и спазмы.</p>",
      images_url: {
        jpg: "/images/current_direction/healthy_back/result_direct_.jpg",
        webp: "/images/current_direction/healthy_back/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/healthy_back/result_direct_.jpg",
          webp: "/images/current_direction/healthy_back/result_direct_.webp",
        },
        content:
          "<strong>Здоровая спина</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Проблемы со спиной есть почти у каждого офисного работника. Занятия «Здоровая спина» помогут снять напряжение, убрать сутулость и поддерживать красивую осанку. Уже после первого занятия вы почувствуете облегчение, уйдут боли и спазмы.</p><p>«Здоровая спина» — комплекс упражнений на укрепление спины и пресса. В программу включены упражнения из йоги, ЛФК, пилатеса, и стретчинга.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/healthy_back/result_direct_.jpg",
          webp: "/images/current_direction/healthy_back/result_direct_.webp",
        },
        content:
          "<strong>Польза занятий «Здоровая спина»:</strong><ul><li>Улучшают осанку</li><li>Избавляют от боли в спине</li><li>Помогают снять зажимы и вытянуть позвоночник</li><li>Служат для профилактики заболеваний позвоночника</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  pilates_mat: {
    hero: {
      description:
        "<h1>PILATES MAT</h1><p>Пилатес Мат – это упражнения на коврике, которые направлены на укрепление мышц бедер, спины, брюшного пресса и ягодиц. Мышцы пресса постоянно находятся в напряжении.</p>",
      images_url: {
        jpg: "/images/current_direction/pilates_mat/result_direct_.jpg",
        webp: "/images/current_direction/pilates_mat/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/pilates_mat/result_direct_.jpg",
          webp: "/images/current_direction/pilates_mat/result_direct_.webp",
        },
        content:
          "<strong>PILATES MAT</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые, юниоры</span><br><p>Пилатес Мат – это упражнения на коврике, которые направлены на укрепление мышц бедер, спины, брюшного пресса и ягодиц. Мышцы пресса постоянно находятся в напряжении.</p><p>Ключевой момент при выполнении упражнений – правильное дыхание. Дышать нужно животом так, чтобы легкие расширялись и сжимались без особого движения грудной клетки.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/pilates_mat/result_direct_.jpg",
          webp: "/images/current_direction/pilates_mat/result_direct_.webp",
        },
        content:
          "<strong>Преимущества Пилатес Мат:</strong><ul><li>Помогает улучшить осанку</li><li>Снимает зажимы и боли в шейном отделе</li><li>Помогает контролировать вес</li><li>Снимает стресс и тревожность</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  soft_balance: {
    hero: {
      description:
        "<h1>SOFT BALANCE</h1><p>Программа SOFT BALANCE поможет поддерживать тело в тонусе. Занятия проходят с использованием специальной балансировочной подушки. Подушка состоит из сверхмягкого пенного материала — миллионов воздушных пузырьков, которые сжимаются во время тренировки, что дает вам ощущение нахождения на облаке.</p><p>Программа разработана специалистами Moreon Fitness.</p>",
      images_url: {
        jpg: "/images/current_direction/soft_balance/result_direct_.jpg",
        webp: "/images/current_direction/soft_balance/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/soft_balance/result_direct_.jpg",
          webp: "/images/current_direction/soft_balance/result_direct_.webp",
        },
        content:
          "<strong>SOFT BALANCE</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>У вас сидячий образ жизни, вы мало двигаетесь? Вы можете столкнуться с нарушением двигательной функции и системы кровообращения, болью в суставах, набором веса.</p><p>Программа SOFT BALANCE поможет поддерживать тело в тонусе. Занятия проходят с использованием специальной балансировочной подушки. Подушка состоит из сверхмягкого пенного материала — миллионов воздушных пузырьков, которые сжимаются во время тренировки, что дает вам ощущение нахождения на облаке.</p><p>Программа разработана специалистами Moreon Fitness.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/soft_balance/result_direct_.jpg",
          webp: "/images/current_direction/soft_balance/result_direct_.webp",
        },
        content:
          "<strong>Тренировки помогают:</strong><ul><li>Улучшить координацию</li><li>Снизить риск травмирования суставов</li><li>Улучшить осанку и двигательную функцию</li><li>Поддерживать мышцы в тонусе</li><li>Улучшить кровообращение</li><li>Контролировать вес</li></ul><p>Балансируй как на облаке!</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  hatha_yoga: {
    hero: {
      description:
        "<h1>ХАТХА YOGA</h1><p>Хатха-йога — верный способ укрепить физическое здоровье и равновесие духа, познать возвышенное и умиротворенное состояние. Хатха-йога — это не просто фитнес, это искусство отдыха и расслабления.</p>",
      images_url: {
        jpg: "/images/current_direction/hatha_yoga/result_direct_.jpg",
        webp: "/images/current_direction/hatha_yoga/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/hatha_yoga/result_direct_.jpg",
          webp: "/images/current_direction/hatha_yoga/result_direct_.webp",
        },
        content:
          "<strong>ХАТХА YOGA</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> начинающий, продвинутый</span><br><b>Возраст:</b><span> взрослые</span><br><p>Хатха-йога — верный способ укрепить физическое здоровье и равновесие духа, познать возвышенное и умиротворенное состояние. Хатха-йога — это не просто фитнес, это искусство отдыха и расслабления.</p><p>Йога снимает лишнюю нагрузку с суставов и позвоночника, учит контролировать дыхание и эмоции, очищает сознание и проясняет мысли.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/hatha_yoga/result_direct_.jpg",
          webp: "/images/current_direction/hatha_yoga/result_direct_.webp",
        },
        content:
          "<strong>Преимущества хатха-йоги:</strong><ul><li>Замедляет старение</li><li>Повышает выносливость, силу и эластичность мышц</li><li>Увеличивает работоспособность</li><li>Развивает внимательность и пробуждает жизненные силы</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  cross_training: {
    hero: {
      description:
        "<h1>КроссТренинг</h1><p>Тренировки в стиле КроссФит — это программа упражнений на силу и выносливость, состоящая в основном из анаэробных упражнений, гимнастики (упражнения с весом собственного тела) и тяжёлой атлетики. Помогают укрепить мускулатуру и избавиться от жировых отложений.</p>",
      images_url: {
        jpg: "/images/current_direction/cross_training/result_direct_.jpg",
        webp: "/images/current_direction/cross_training/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/cross_training/result_direct_.jpg",
          webp: "/images/current_direction/cross_training/result_direct_.webp",
        },
        content:
          "<strong>КроссТренинг</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовки:</b><span> Для всех</span><br><b>Возраст:</b><span> Взрослые и юниоры</span><br><p>КроссТренинг — это тренировки в стиле КроссФит, программа упражнений на силу и выносливость, состоящая в основном из анаэробных упражнений, гимнастики (упражнения с весом собственного тела) и тяжёлой атлетики. Помогают укрепить мускулатуру и избавиться от жировых отложений.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/cross_training/result_direct_.jpg",
          webp: "/images/current_direction/cross_training/result_direct_.webp",
        },
        content:
          "<p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  hot_iron_1: {
    hero: {
      description:
        "<h1>HOT IRON 1</h1><p>Силовая тренировка на все группы мышц с использованием штанги, степ-платформ и ковриков, направленная на жиросжигание и силовую выносливость.</p>",
      images_url: {
        jpg: "/images/current_direction/hot_iron_1/result_direct_.jpg",
        webp: "/images/current_direction/hot_iron_1/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/hot_iron_1/result_direct_.jpg",
          webp: "/images/current_direction/hot_iron_1/result_direct_.webp",
        },
        content:
          "<strong>HOT IRON 1</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовки:</b><span> для всех</span><br><p>Силовая тренировка на все группы мышц с использованием штанги, степ-платформ и ковриков, направленная на жиросжигание и силовую выносливость. Во время занятия на каждую группу мышц отводится от 3 до 5 минут и обеспечивается полная прокачка всего тела.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/hot_iron_1/result_direct_.jpg",
          webp: "/images/current_direction/hot_iron_1/result_direct_.webp",
        },
        content:
          "<p>Лицензионная программа IRON SYSTEMS</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  hot_iron_2: {
    hero: {
      description:
        "<h1>HOT IRON 2</h1><p>Силовая тренировка на все группы мышц с использованием штанги, степ-платформ и ковриков, направленная на жиросжигание и силовую выносливость.</p>",
      images_url: {
        jpg: "/images/current_direction/hot_iron_2/result_direct_.jpg",
        webp: "/images/current_direction/hot_iron_2/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/hot_iron_2/result_direct_.jpg",
          webp: "/images/current_direction/hot_iron_2/result_direct_.webp",
        },
        content:
          "<strong>HOT IRON 2</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовки:</b><span> продвинутый</span><br><p>Силовая тренировка на все группы мышц с использованием штанги, степ-платформ и ковриков, направленная на жиросжигание и силовую выносливость. Во время занятия на каждую группу мышц отводится от 3 до 5 минут и обеспечивается полная прокачка всего тела.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/hot_iron_2/result_direct_.jpg",
          webp: "/images/current_direction/hot_iron_2/result_direct_.webp",
        },
        content:
          "<strong>Лицензионная программа IRON SYSTEMS</strong><p>Рекомендуется для тех, кто прошел 1 уровень HOT IRON</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  les_mills_grit: {
    hero: {
      description:
        "<h1>LES MILLS GRIT</h1><p>МОРЕОН GRIT — это 30 минут суперинтенсивного фитнеса и 15 минут упражнений на пресс и растяжку. Благодаря комплексу силовых упражнений с использованием гантелей, штанги и фитнес-платформы задействованы все основные группы мышц.</p>",
      images_url: {
        jpg: "/images/current_direction/les_mills_grit/result_direct_.jpg",
        webp: "/images/current_direction/les_mills_grit/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/les_mills_grit/result_direct_.jpg",
          webp: "/images/current_direction/les_mills_grit/result_direct_.webp",
        },
        content:
          "<strong>LES MILLS GRIT</strong><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> продвинутый</span><br><b>Возраст:</b><span> взрослые</span><br><p>МОРЕОН GRIT — это 30 минут суперинтенсивного фитнеса и 15 минут упражнений на пресс и растяжку. Благодаря комплексу силовых упражнений с использованием гантелей, штанги и фитнес-платформы задействованы все основные группы мышц.</p><p>По окончании программы метаболизм в организме продолжается еще несколько часов. Эта тренировка практически ничем не отличается от кроссфита. Нагрузка достаточно большая и подходит как для женщин, так и для мужчин. Это тренировка унисекс.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/les_mills_grit/result_direct_.jpg",
          webp: "/images/current_direction/les_mills_grit/result_direct_.webp",
        },
        content:
          "<strong>Польза занятий МОРЕОН GRIT:</strong><ul><li>Тренируется выносливость</li><li>Эффективно сжигаются калории</li><li>Мышцы поддерживаются в тонусе</li><li>Тренируется не только тело, но и сила духа</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  thinner: {
    hero: {
      description:
        "<h1>Похудей-ка</h1><p>Комплекс физических упражнений, составленный с использованием различных методов: аэробной тренировки, интервально-круговой тренировки, силовой. Это уникальный метод снижения веса и коррекции фигуры.</p>",
      images_url: {
        jpg: "/images/current_direction/thinner/result_direct_.jpg",
        webp: "/images/current_direction/thinner/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/thinner/result_direct_.jpg",
          webp: "/images/current_direction/thinner/result_direct_.webp",
        },
        content:
          "<strong>Похудей-ка</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><p>Комплекс физических упражнений, составленный с использованием различных методов: аэробной тренировки, интервально-круговой тренировки, силовой. Это уникальный метод снижения веса и коррекции фигуры.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/thinner/result_direct_.jpg",
          webp: "/images/current_direction/thinner/result_direct_.webp",
        },
        content:
          "<p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  les_mills_core: {
    hero: {
      description:
        "<h1>LES MILLS CORE</h1><p>Мышцы кора – эта группа мышц, расположенных в центральной части тела человека. Они отвечают за стабилизацию и равновесие нашего тела и внутренних органов.</p><p>Прорабатывая кор, программа LES MILLS CORE создает фундамент для более сильного тела.</p>",
      images_url: {
        jpg: "/images/current_direction/les_mills_core/result_direct_.jpg",
        webp: "/images/current_direction/les_mills_core/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/les_mills_core/result_direct_.jpg",
          webp: "/images/current_direction/les_mills_core/result_direct_.webp",
        },
        content:
          "<strong>LES MILLS CORE</strong><br><b>Продолжительность:</b><span> 30/45 минут</span><br><b>Возраст:</b><span> взрослые</span><br><p><strong>LES MILLS CORE</strong> – это 45 или 30-минутная тренировка кора, которая гарантирует быстрый результат, независимо от уровня подготовки.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/les_mills_core/result_direct_.jpg",
          webp: "/images/current_direction/les_mills_core/result_direct_.webp",
        },
        content:
          "<p>Мышцы кора – это группа мышц, расположенных в центральной части тела человека. Они отвечают за стабилизацию и равновесие нашего тела и внутренних органов.</p><p>Прорабатывая кор, программа LES MILLS CORE создает фундамент для более сильного тела.</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  real_ryder: {
    hero: {
      description:
        "<h1>REAL RYDER</h1><p>RealRyder® – это динамичный вело-тренажер, который симулирует езду на велосипеде. Во время тренировки сжигается большое количество калорий. RealRyder создает ощущение настоящей велогонки. Максимальная реалистичность, динамика и плавность движений в трех измерениях.</p>",
      images_url: {
        jpg: "/images/current_direction/real_ryder/result_direct_.jpg",
        webp: "/images/current_direction/real_ryder/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/real_ryder/result_direct_.jpg",
          webp: "/images/current_direction/real_ryder/result_direct_.webp",
        },
        content:
          "<strong>REAL RYDER</strong><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>RealRyder® – это динамичный вело-тренажер, который симулирует езду на велосипеде. Во время тренировки сжигается большое количество калорий. RealRyder создает ощущение настоящей велогонки. Максимальная реалистичность, динамика и плавность движений в трех измерениях.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/real_ryder/result_direct_.jpg",
          webp: "/images/current_direction/real_ryder/result_direct_.webp",
        },
        content:
          "<strong>Польза тренировок REALRYDER (сайкл):</strong><ul><li>Тренируется выносливость</li><li>Эффективно сжигаются калории</li><li>Мышцы укрепляются и поддерживаются в тонусе</li><li>Улучшается кровообращение</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  step: {
    hero: {
      description:
        "<h1>STEP</h1><p>Для тех, кто хочет сбросить вес, скорректировать проблемные зоны (ноги, ягодицы, живот), нужна аэробная и силовая нагрузка. STEP сочетает в себе и то, и другое, и даже включает элементы танцев. Это одна из лучших фитнес-программ, признанных во всем мире.</p>",
      images_url: {
        jpg: "/images/current_direction/step/result_direct_.jpg",
        webp: "/images/current_direction/step/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/step/result_direct_.jpg",
          webp: "/images/current_direction/step/result_direct_.webp",
        },
        content:
          "<strong>STEP</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровни подготовленности:</b><span> для начинающих, подготовленных и продвинутых</span><br><b>Возраст:</b><span> юниоры, взрослые</span><br><p>Степ-аэробика состоит из набора базовых шагов, соединенных в связки (комбинации). Тренировки проходят под быструю ритмичную музыку с использованием степ-платформ. Платформы имеют регулируемую высоту, которая позволяет увеличить или уменьшить сложность тренировки.</p><p>Уровень сложности шагов и связок зависит от конкретного урока. STEP I – занятия для новичков, изучение базовых шагов. STEP INTERVAL – чередуем аэробную и силовую нагрузку, рекомендуется для тех, кто уже изучил базовые движения. STEP PRO – усложненная хореография, высокий темп, уровень для продвинутых.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/step/result_direct_.jpg",
          webp: "/images/current_direction/step/result_direct_.webp",
        },
        content:
          "<strong>Тренировки помогают:</strong><ul><li>Поддерживать мышцы в тонусе</li><li>Улучшить кровообращение</li><li>Контролировать вес</li><li>Улучшить выносливость</li><li>Развить координацию движений</li><li>Повысить жизненный тонус и улучшить настроение</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  step_pro: {
    hero: {
      description:
        "<h1>STEP PRO</h1><p>STEP PRO — это направление степ-аэробики продвинутого уровня. Совершенствование техники движений на step-платформе. Степ-аэробика является очень популярным классом на групповых занятиях благодаря эффективной и при этом щадящей для суставов нагрузке.</p>",
      images_url: {
        jpg: "/images/current_direction/step_pro/result_direct_.jpg",
        webp: "/images/current_direction/step_pro/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/step_pro/result_direct_.jpg",
          webp: "/images/current_direction/step_pro/result_direct_.webp",
        },
        content:
          "<strong>STEP PRO</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>STEP PRO — это направление степ-аэробики продвинутого уровня. Совершенствование техники движений на step-платформе. Степ-аэробика является очень популярным классом на групповых занятиях благодаря эффективной и при этом щадящей для суставов нагрузке.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/step_pro/result_direct_.jpg",
          webp: "/images/current_direction/step_pro/result_direct_.webp",
        },
        content:
          "<strong>Тренировка на степ-платформе поможет вам:</strong><ul><li>Получить хорошую фигуру</li><li>Натренировать сердечную мышцу</li><li>Развить выносливость</li><li>Улучшить координацию движений</li><li>Укрепить мышцы</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  pro_jumping: {
    hero: {
      description:
        "<h1>PRO JUMPING</h1><p>Мини-батут позволяет прокачать все тело сразу. Не нужно делать отдельные комплексы для ног, рук, пресса и проблемных зон. Во время прыжка работает абсолютно всё тело! Pro Jumping ускоряет процессы похудения и оптимизацию вашей фигуры.</p>",
      images_url: {
        jpg: "/images/current_direction/pro_jumping/result_direct_.jpg",
        webp: "/images/current_direction/pro_jumping/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/pro_jumping/result_direct_.jpg",
          webp: "/images/current_direction/pro_jumping/result_direct_.webp",
        },
        content:
          "<strong>PRO JUMPING</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовки:</b><span> для всех</span><br><p>Мини-батут позволяет прокачать все тело сразу. Не нужно делать отдельные комплексы для ног, рук, пресса и проблемных зон. Во время прыжка работает абсолютно всё тело! Причем нагрузка распределяется равномерно. Эффект полета дарит дополнительную мотивацию заниматься. Pro Jumping ускоряет процессы похудения и оптимизацию вашей фигуры.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/pro_jumping/result_direct_.jpg",
          webp: "/images/current_direction/pro_jumping/result_direct_.webp",
        },
        content:
          "<p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  step_interval: {
    hero: {
      description:
        "<h1>STEP-INTERVAL</h1><p>Специальная тренировка с использованием степ-платформы и различного оборудования, построенная на чередовании аэробной и силовой нагрузки. Рекомендуется для имеющих начальную подготовку.</p>",
      images_url: {
        jpg: "/images/current_direction/step_interval/result_direct_.jpg",
        webp: "/images/current_direction/step_interval/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/step_interval/result_direct_.jpg",
          webp: "/images/current_direction/step_interval/result_direct_.webp",
        },
        content:
          "<strong>STEP-INTERVAL</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><p>Специальная тренировка с использованием степ-платформы и различного оборудования, построенная на чередовании аэробной и силовой нагрузки. Рекомендуется для имеющих начальную подготовку.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/step_interval/result_direct_.jpg",
          webp: "/images/current_direction/step_interval/result_direct_.webp",
        },
        content:
          "<strong>Польза занятий Step Interval:</strong><ul><li>Интенсивное развитие выносливости, равновесия, пластичности и ловкости</li><li>Приведение в тонус ягодиц и внутренней части бедра — происходит не наращивание мышц, а сушка тела</li><li>Профилактика таких заболеваний суставов, как артрит, остеопороз</li><li>Сброс лишнего веса</li><li>Уплотнение костной ткани и предотвращение болезней костей в старости</li><li>Устранение последствий гиподинамии</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  gym: {
    hero: {
      description:
        "<h1>Тренажерный зал</h1><p>Тренажерный зал Мореон Фитнес в Ясенево — тропический оазис в городских джунглях. Площадь тренажерного зала 1500 м², потолок 35 м. Зал светлый и просторный, из панорамных окон открывается вид на березовую рощу.</p><p>В Мореон Фитнес используются тренажеры итальянской компании Technologym (эксклюзивный поставщик Олимпийских Игр). Это оборудование премиум-класса, которое подходит и для новичков, и для спортсменов-профессионалов.</p>",
      images_url: {
        jpg: "/images/current_direction/gym/result_direct_.jpg",
        webp: "/images/current_direction/gym/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/gym/result_direct_.jpg",
          webp: "/images/current_direction/gym/result_direct_.webp",
        },
        content:
          "<strong>Тренажерный зал</strong><p>Тренажерный зал разделен на зоны:</p><p><b>Кардиозона.</b> Беговые дорожки, велотренажеры, эллипсы, гребные тренажеры. Все кардиотренажеры оснащены панелями с сенсорным управлением, телевидением и выходом в интернет.</p><p><b>Зона блочных тренажеров линейки Selection.</b> Тренажеры для полной проработки всех групп мышц, увеличения мышечной массы и улучшения выносливости.</p><p><b>Зона свободных весов.</b> Гантели и штанги, скамьи для жима, тренажер «Смита», силовые рамы и даже помост для тяги. Удовлетворит запросы любого, даже профессионального атлета.</p><p><b>Зона стретчинга и функционального тренинга.</b> Оборудование для тренировок на все группы мышц и растяжки. Коврики, фитболы, BOSU, амортизаторы, бодибары, утяжелители; Зона тренажеров KINESIS. Тренажеры подходят для пользователей с любым уровнем подготовки, для различных тренировочных целей, в том числе реабилитации.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/gym/result_direct_.jpg",
          webp: "/images/current_direction/gym/result_direct_.webp",
        },
        content:
          "<strong>Тренировки в тренажерном зале</strong><p>Тренироваться в зале можно самостоятельно, но для более быстрого и качественного результата лучше обратиться к персональному тренеру. Также можно заниматься по индивидуальной программе, которую составит тренер.</p><p><b>Преимущества тренажерного зала:</b></p><ul><li>Функциональный и комфортный дизайн</li><li>Свободное пространство в каждой зоне</li><li>Чистый и свежий воздух</li><li>Международные стандарты качества</li><li>Профессиональные тренеры</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  infant_swimming: {
    hero: {
      description:
        "<h1>Грудничковое плавание</h1><p>Плавание — один из самых полезных видов спорта, практически не имеющий противопоказаний. Плавание в воде оказывает эффект физиологического массажа мышц ребенка, положительно воздействует на кожные покровы и активизирует кровоснабжение.</p><p>Мы работаем с малышами практически с рождения. Наши профессиональные тренеры проводят групповые и индивидуальные занятия для детей от 2 месяцев.</p>",
      images_url: {
        jpg: "/images/current_direction/infant_swimming/result_direct_.jpg",
        webp: "/images/current_direction/infant_swimming/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/infant_swimming/result_direct_.jpg",
          webp: "/images/current_direction/infant_swimming/result_direct_.webp",
        },
        content:
          "<strong>Грудничковое плавание</strong><p>Занятия в бассейне для грудничков позволяют укрепить мышечную систему новорожденного, иммунитет, повысить уровень доверия между родителями и ребенком. Занятия в воде дают положительные эмоции малышу и взрослым.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/infant_swimming/result_direct_.jpg",
          webp: "/images/current_direction/infant_swimming/result_direct_.webp",
        },
        content:
          "<strong>Занятия проходят в бассейне Золотые рыбки</strong><p>Бассейн находится на территории самого большого аквапарка Москвы. Длина бассейна составляет 12 метров, глубина 1,2 метра. Зал оснащен всем необходимым оборудованием и инвентарем.</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  childrens_swimming: {
    hero: {
      description:
        "<h1>Плавание для детей</h1><p>Плавание — один из самых полезных видов спорта, практически не имеющий противопоказаний. Мы работаем с малышами практически с рождения. Наши профессиональные тренеры проводят групповые и индивидуальные занятия для детей от 0 до 13 лет.</p>",
      images_url: {
        jpg: "/images/current_direction/childrens_swimming/result_direct_.jpg",
        webp: "/images/current_direction/childrens_swimming/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/childrens_swimming/result_direct_.jpg",
          webp: "/images/current_direction/childrens_swimming/result_direct_.webp",
        },
        content:
          "<strong>Это больше, чем просто плавание:</strong><ul><li>2 бассейна для тренировок</li><li>Разделение по возрастам и уровню навыков</li><li>Тренер в воде вместе с детьми</li><li>Без погони за нормативами</li><li>Продолжительность занятия от 45 минут</li><li>Бесплатная пробная тренировка</li></ul><p>Мы знаем, как полюбить воду и поможем вашим деткам!</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/childrens_swimming/result_direct_.jpg",
          webp: "/images/current_direction/childrens_swimming/result_direct_.webp",
        },
        content:
          "<b>Особенности занятий:</b><ul><li>2 специализированных бассейна</li><li>Группы формируются по возрасту и уровню подготовки</li><li>Индивидуальный подход - тренер находится в воде</li><li>Акцент на удовольствие от процесса, а не на нормативы</li><li>Оптимальная продолжительность - от 45 минут</li><li>Возможность бесплатно попробовать</li></ul><p>Наша методика помогает детям полюбить воду и получать удовольствие от плавания!</p><p><b>Контакты для записи:</b>Телефон: <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  school_competitive_swimming: {
    hero: {
      description:
        "<h1>Школа спортивного плавания</h1><p>Плавание способствует оздоровлению организма, укрепляет иммунитет и поднимает настроение. В Школе спортивного плавания занимаются дети от 7 лет под чутким контролем опытных тренеров с многолетним стажем.</p>",
      images_url: {
        jpg: "/images/current_direction/school_competitive_swimming/result_direct_.jpg",
        webp: "/images/current_direction/school_competitive_swimming/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/school_competitive_swimming/result_direct_.jpg",
          webp: "/images/current_direction/school_competitive_swimming/result_direct_.webp",
        },
        content:
          "<strong>Школа спортивного плавания</strong><p>Сделайте первый шаг на пути к новым рекордам и достижениям! Нам важно не просто научить плавать, познакомить с разными техниками плавания, но и чтобы ребенку это нравилось!</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/school_competitive_swimming/result_direct_.jpg",
          webp: "/images/current_direction/school_competitive_swimming/result_direct_.webp",
        },
        content:
          "<strong>Школа спортивного плавания</strong><p>Занятия проходят в 25-метровом бассейне в группах, сформированных с учетом возраста и уровня подготовки. В обучении используется профессиональное оборудование: доски, нудлы, ласты.</p><p>Плавание — жизненно важный навык, который должен освоить каждый ребенок.</p><p>Записаться на тренировку можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  swimming_adults: {
    hero: {
      description:
        "<h1>Плавание для взрослых</h1><p>Плавание – это отличный вид спорта, подходящий для людей любого возраста. В Мореон Фитнес проводятся групповые и индивидуальные занятия в бассейне.</p>",
      images_url: {
        jpg: "/images/current_direction/swimming_adults/result_direct_.jpg",
        webp: "/images/current_direction/swimming_adults/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/swimming_adults/result_direct_.jpg",
          webp: "/images/current_direction/swimming_adults/result_direct_.webp",
        },
        content:
          "<strong>Плавание для взрослых</strong><p>Плавание – это отличный вид спорта, подходящий для людей любого возраста. В Мореон Фитнес проводятся групповые и индивидуальные занятия в бассейне. Для начинающих есть уроки с минимальной нагрузкой, силовые уроки с использованием дополнительного оборудования с отягощением в воде для продвинутых, для будущих мам – занятия, где вместе с инструктором вы научитесь правильному дыханию, подберете оптимальную физическую нагрузку.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/swimming_adults/result_direct_.jpg",
          webp: "/images/current_direction/swimming_adults/result_direct_.webp",
        },
        content:
          "<strong>Плавание для взрослых</strong><p>Для самых активных спортсменов проводятся соревнования. Укрепляйте свой организм и улучшайте спортивные навыки вместе с нами!</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  aqua_aerobics: {
    hero: {
      description:
        "<h1>Акваэробика</h1><p>Аквааэробика – это польза водных процедур и физических упражнений. Аквааэробика является наименее травматичным видом нагрузок и имеет много преимуществ:</p><ul><li>Поддержание хорошей физической формы</li><li>Улучшение осанки</li><li>Контроль веса и избавление от целлюлита</li><li>Укрепление иммунитета</li><li>Снятие напряжения, избавление от стресса</li><li>Нормализация обмена веществ</li><li>Поддержание заряда бодрости и хорошего настроения</li></ul>",
      images_url: {
        jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
        webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
          webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
        },
        content:
          "<h2>AQUABEGINNERS</h2><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для начинающих</span><br><b>Возраст:</b><span> взрослые</span><br><p>Аквааэробика – самый безопасный и полезный вид спорта для людей с ослабленным здоровьем и пожилых людей.</p><p>AquaBeginners – это уроки для начинающих с минимальной нагрузкой. Используются основные движения в простых комбинациях. Аэробная часть занимает около 25 минут, затем 10-15 минут выполняются упражнения на гибкость и растяжку. Используется дополнительное оборудование – пояс и перчатки. Урок отлично подходит тем, кто первый раз пришел на аквааэробику.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
          webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
        },
        content:
          "<h2>AQUAPRESS</h2><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Aqua Press – это силовая тренировка, направленная на укрепление прямых и косых мышц пресса, спины и ягодиц.</p><p>Занятие развивает силовую выносливость и задействует мышцы-стабилизаторы. Используется дополнительное оборудование – пояс и перчатки.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
          webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
        },
        content:
          "<h2>СУСТАВНАЯ ГИМНАСТИКА</h2><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для начинающих и подготовленных</span><br><b>Возраст:</b><span> взрослые</span><br><p>Суставная гимнастика в бассейне помогает улучшить подвижность суставов и служит хорошей профилактикой остеохондроза.</p><p>Занятие включает в себя простые и доступные упражнения из аквааэробики. Используется дополнительное оборудование: перчатки, гантели, нудлы.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
          webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
        },
        content:
          "<h2>AQUA MIX</h2><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Aqua Mix – комбинированное занятие с элементами классической аквааэробики, силовых упражнений средней интенсивности с гантелями и аква-Noodle (гибкой палки).</p><p>Урок направлен на тренировку сердечно-сосудистой и дыхательной систем организма, на развитие координации, укрепление мышц рук, ног и брюшного пресса, развитие гибкости. Используется дополнительное оборудование – пояс, перчатки, гантели, нудл.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
          webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
        },
        content:
          "<h2>AQUAPOWER</h2><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Aqua Power — аэробно-силовой комплекс упражнений с гантелями, объединяющий кардио-тренировку и растяжку всех групп мышц.</p><p>Урок направлен на тренировку мышц плечевого пояса и пресса и укрепление позвоночника. Дополнительное оборудование – пояс, перчатки.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
          webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
        },
        content:
          "<h2>AQUA NOODLES</h2><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Aqua Noodles – занятия с noodles (мягкими палками). Noodles не только поддерживают тело на воде, но и используются в качестве дополнительного отягощения.</p><p>Урок направлен на тренировку сердечно-сосудистой и дыхательной систем организма, на развитие координации, укрепление мышц рук и ног.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/aqua_aerobics/result_direct_.jpg",
          webp: "/images/current_direction/aqua_aerobics/result_direct_.webp",
        },
        content:
          "<h2>AQUA LEGS</h2><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><p>AQUA LEGS — аэробно-силовой урок, направленный на проработку мышц ног, с использованием оборудования: аквапояс, NOODLES, или без него.</p>",
      },
    ],
  },
  aqua_mom: {
    hero: {
      description:
        "<h1>Aqua Mama</h1><p>Групповое занятие для будущих мам. Вместе с инструктором вы научитесь правильному дыханию, подберете оптимальную физическую нагрузку в соответствии со сроком беременности, избавитесь от боли в пояснице и укрепите мышцы.</p>",
      images_url: {
        jpg: "/images/current_direction/aqua_mom/result_direct_.jpg",
        webp: "/images/current_direction/aqua_mom/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/aqua_mom/result_direct_.jpg",
          webp: "/images/current_direction/aqua_mom/result_direct_.webp",
        },
        content:
          "<strong>Aqua Mama</strong><br><b>Продолжительность:</b><span> 45 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Групповое занятие для будущих мам. Вместе с инструктором вы научитесь правильному дыханию, подберете оптимальную физическую нагрузку в соответствии со сроком беременности, избавитесь от боли в пояснице и укрепите мышцы.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/aqua_mom/result_direct_.jpg",
          webp: "/images/current_direction/aqua_mom/result_direct_.webp",
        },
        content:
          "<strong>Польза аквааэробики для беременных:</strong><ul><li>Улучшает кровообращение и работу сердечно-сосудистой системы</li><li>Обеспечивает мягкий массажный эффект для всего тела</li><li>Снижает нагрузку на суставы и позвоночник</li><li>Укрепляет мышцы, важные для беременности и родов</li><li>Помогает снять напряжение в пояснице</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  work_apparatus: {
    hero: {
      description:
        "<h1>Работа на снарядах</h1><p>Работа на снарядах – это возможность улучшить боевые навыки без ущерба для здоровья и внешнего вида.</p>",
      images_url: {
        jpg: "/images/current_direction/work_apparatus/result_direct_.jpg",
        webp: "/images/current_direction/work_apparatus/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/work_apparatus/result_direct_.jpg",
          webp: "/images/current_direction/work_apparatus/result_direct_.webp",
        },
        content:
          "<strong>Работа на снарядах</strong><p>Снарядная тренировка позволяет:</p><ul><li>Развить все навыки боя: силу, точность, быстроту удара, умение уворачиваться, маневрировать</li><li>Освоить азы боевых искусств: тренировка со снарядами - это база для будущих побед</li><li>Минимизировать травмы: специальные снаряды помогают отрабатывать технику без полноконтактных спаррингов</li></ul>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/work_apparatus/result_direct_.jpg",
          webp: "/images/current_direction/work_apparatus/result_direct_.webp",
        },
        content:
          "<strong>Работа на снарядах</strong><p>Работа на снарядах – это возможность улучшить боевые навыки без ущерба для здоровья и внешнего вида.</p><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  box: {
    hero: {
      description:
        "<h1>Бокс</h1><p>Бокс – это отличная кардионагрузка, равномерное развитие всех групп мышц, а также развитие реакции, координации и выносливости!</p><p>Вы научитесь принимать самостоятельные решения, рассчитывать только на себя, держать удар и сохранять хладнокровие в любой ситуации.</p><p>Занятия проходят в специальных мягких перчатках.</p>",
      images_url: {
        jpg: "/images/current_direction/box/result_direct_.jpg",
        webp: "/images/current_direction/box/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/box/result_direct_.jpg",
          webp: "/images/current_direction/box/result_direct_.webp",
        },
        content:
          "<strong>Бокс</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Бокс – это отличная кардионагрузка, равномерное развитие всех групп мышц, а также развитие реакции, координации и выносливости! Вы научитесь принимать самостоятельные решения, рассчитывать только на себя, держать удар и сохранять хладнокровие в любой ситуации. Занятия проходят в специальных мягких перчатках.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/box/result_direct_.jpg",
          webp: "/images/current_direction/box/result_direct_.webp",
        },
        content:
          "<strong>Польза от занятий боксом:</strong><ul><li>Укрепление здоровья и иммунитета</li><li>Развитие всех групп мышц</li><li>Улучшение обмена веществ</li><li>Развитие быстрой реакции</li><li>Повышение уверенности в себе</li></ul><p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  grappling: {
    hero: {
      description:
        "<h1>Грепплинг</h1><p>Вид спортивного единоборства, совмещающий в себе технику всех борцовских дисциплин, с минимальными ограничениями по использованию болевых и удушающих приёмов. Этот вид борьбы не включает в себя нанесение ударов и использование оружия.</p>",
      images_url: {
        jpg: "/images/current_direction/grappling/result_direct_.jpg",
        webp: "/images/current_direction/grappling/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/grappling/result_direct_.jpg",
          webp: "/images/current_direction/grappling/result_direct_.webp",
        },
        content:
          "<strong>Грепплинг</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовки:</b><span> Для всех</span><br><b>Возраст:</b><span> Взрослые и юниоры</span><br><p>Вид спортивного единоборства, совмещающий в себе технику всех борцовских дисциплин, с минимальными ограничениями по использованию болевых и удушающих приёмов. Этот вид борьбы не включает в себя нанесение ударов и использование оружия.</p><p>Стремление закончить поединок досрочно, с помощью болевого или удушающего приёма, является отличительной особенностью грепплинга.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/grappling/result_direct_.jpg",
          webp: "/images/current_direction/grappling/result_direct_.webp",
        },
        content:
          "<p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  kickboxing: {
    hero: {
      description:
        "<h1>Кикбоксинг</h1><p>Вид боевых искусств, в котором разрешены удары руками и ногами. В экипировке обязательно присутствуют боксерские перчатки.</p>",
      images_url: {
        jpg: "/images/current_direction/kickboxing/result_direct_.jpg",
        webp: "/images/current_direction/kickboxing/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/kickboxing/result_direct_.jpg",
          webp: "/images/current_direction/kickboxing/result_direct_.webp",
        },
        content:
          "<strong>Кикбоксинг</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовки:</b><span> Для всех</span><br><b>Возраст:</b><span> Взрослые и юниоры</span><br><p>Вид боевых искусств, в котором разрешены удары руками и ногами. В экипировке обязательно присутствуют боксерские перчатки.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/kickboxing/result_direct_.jpg",
          webp: "/images/current_direction/kickboxing/result_direct_.webp",
        },
        content:
          "<p>Записаться на занятие можно по телефону <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
  mma: {
    hero: {
      description:
        "<h1>ММА</h1><p>Боевые искусства, представляющие собой сочетание множества техник, школ и направлений единоборств. ММА являются полноконтактным боем с применением ударной техники и борьбы как в стойке (клинч), так и на полу (партер).</p>",
      images_url: {
        jpg: "/images/current_direction/mma/result_direct_.jpg",
        webp: "/images/current_direction/mma/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/mma/result_direct_.jpg",
          webp: "/images/current_direction/mma/result_direct_.webp",
        },
        content:
          "<strong>ММА</strong><br><b>Продолжительность:</b><span> 55 мин</span><br><b>Уровень подготовки:</b><span> Для всех</span><br><b>Возраст:</b><span> Взрослые и юниоры</span><br><p>Боевые искусства, представляющие собой сочетание множества техник, школ и направлений единоборств. ММА являются полноконтактным боем с применением ударной техники и борьбы как в стойке (клинч), так и на полу (партер).</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/mma/result_direct_.jpg",
          webp: "/images/current_direction/mma/result_direct_.webp",
        },
        content:
          "<p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b> или оставьте заявку</p>",
      },
    ],
  },
  latina: {
    hero: {
      description:
        "<h1>LATINA</h1><p>Латина учит двигаться непринужденно и свободно. Программа обучения начинается с базы – активных движений бедрами, развития гибкости и пластики тела, работы ног и рук. Быстрый темп музыки гарантирует физическую нагрузку и заряд позитивной энергии.</p>",
      images_url: {
        jpg: "/images/current_direction/latina/result_direct_.jpg",
        webp: "/images/current_direction/latina/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/latina/result_direct_.jpg",
          webp: "/images/current_direction/latina/result_direct_.webp",
        },
        content:
          "<strong>LATINA</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые и юниоры</span><br><p>Если вы считаете себя ярким, зажигательным и привлекательным человеком или хотите стать таковым, смело выбирайте танцы латина! Латина — это зажигательный коктейль из пасодобля и джайва, меренге и бачаты, джайва и сальсы, ча-ча-ча и мамбы, самбы и румбы.</p><p>Латина учит двигаться непринужденно и свободно. Программа обучения начинается с базы – активных движений бедрами, развития гибкости и пластики тела, работы ног и рук. Быстрый темп музыки гарантирует физическую нагрузку и заряд позитивной энергии.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/latina/result_direct_.jpg",
          webp: "/images/current_direction/latina/result_direct_.webp",
        },
        content:
          "<strong>Польза латинских танцев:</strong><ul><li>Развитие пластики и грации</li><li>Совершенствование осанки и координации</li><li>Эффективное снижение веса</li><li>Повышение уверенности в себе</li><li>Улучшение работы сердечно-сосудистой системы</li></ul><p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b> или оставьте заявку</p>",
      },
    ],
  },
  multidance: {
    hero: {
      description:
        "<h1>MULTI DANCE</h1><p>MULTI DANCE — это смешение стилей и авторский подход к современным танцам. Это отличный способ снять стресс и напряжение после рабочего дня.</p><p>Раскройте свой творческий потенциал, погрузившись в мир музыки, ритма и движения!</p>",
      images_url: {
        jpg: "/images/current_direction/multidance/result_direct_.jpg",
        webp: "/images/current_direction/multidance/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/multidance/result_direct_.jpg",
          webp: "/images/current_direction/multidance/result_direct_.webp",
        },
        content:
          "<strong>MULTI DANCE</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые и юниоры</span><br><p>MULTI DANCE — смешение стилей и авторское видение современных танцев. Это отличный способ снять стресс и нервное напряжение после трудовых будней. Раскройте свой творческий потенциал, погрузившись в прекрасный мир музыки, ритма и движений!</p><p>На занятиях разучиваются движения из разных стилей: латина, брейк-данс, хаус, джаз-фанк, фри-стайл, стрип-пластика и др. Вместе они объединяются в красивый и неповторимый танец.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/multidance/result_direct_.jpg",
          webp: "/images/current_direction/multidance/result_direct_.webp",
        },
        content:
          "<strong>Преимущества MULTI DANCE:</strong><ul><li>Развитие пластики и координации</li><li>Совершенствование чувства ритма</li><li>Снятие стресса и эмоциональная разгрузка</li><li>Улучшение физической формы</li><li>Раскрытие творческого потенциала</li></ul><p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b> или оставьте заявку</p>",
      },
    ],
  },
  oriental: {
    hero: {
      description:
        "<h1>ORIENTAL</h1><p>ORIENTAL – это восточные танцы, включающие элементы классического танца живота. Тренируют мышцы шеи, рук, бедер, спины, диафрагмы и, конечно, живота.</p>",
      images_url: {
        jpg: "/images/current_direction/oriental/result_direct_.jpg",
        webp: "/images/current_direction/oriental/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/oriental/result_direct_.jpg",
          webp: "/images/current_direction/oriental/result_direct_.webp",
        },
        content:
          "<strong>ORIENTAL</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые</span><br><p>Хотите раскрыть женскую энергию и сделать формы более подтянутыми? ORIENTAL подчеркивает преимущества женской фигуры и помогает раскрепоститься.</p><p>ORIENTAL – это восточные танцы, включающие элементы классического танца живота. Тренируют мышцы шеи, рук, бедер, спины, диафрагмы и, конечно, живота.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/oriental/result_direct_.jpg",
          webp: "/images/current_direction/oriental/result_direct_.webp",
        },
        content:
          "<strong>Польза восточных танцев:</strong><ul><li>Укрепление мышц пресса, спины и ног</li><li>Развитие пластики и грации</li><li>Раскрепощение и повышение уверенности</li><li>Раскрытие женской энергии</li><li>Эффективное снижение веса</li><li>Улучшение осанки и работы внутренних органов</li></ul><p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b> или оставьте заявку</p>",
      },
    ],
  },
  zumba: {
    hero: {
      description:
        "<h1>ZUMBA®</h1><p>Зумба – это танцевальный фитнес, сочетающий элементы клубной латины: меренге, бачата, сальса, самба и реггетон.</p><p>Занятия дают отличную кардионагрузку, укрепляют мышцы и заряжают позитивом. Динамичная смена темпов делает тренировку эффективной и увлекательной.</p>",
      images_url: {
        jpg: "/images/current_direction/zumba/result_direct_.jpg",
        webp: "/images/current_direction/zumba/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/zumba/result_direct_.jpg",
          webp: "/images/current_direction/zumba/result_direct_.webp",
        },
        content:
          "<strong>ZUMBA®</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><b>Возраст:</b><span> взрослые, юниоры</span><br><p>Зумба – это танцевальный фитнес, сочетающий элементы клубной латины: меренге, бачата, сальса, самба и реггетон.</p><p>Занятия дают отличную кардионагрузку, укрепляют мышцы и заряжают позитивом. Динамичная смена темпов делает тренировку эффективной и увлекательной.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/zumba/result_direct_.jpg",
          webp: "/images/current_direction/zumba/result_direct_.webp",
        },
        content:
          "<strong>Преимущества ZUMBA®:</strong><ul><li>Укрепление и тонизирование всех групп мышц</li><li>Эффективное сжигание калорий</li><li>Улучшение работы сердечно-сосудистой системы</li><li>Развитие координации и чувства ритма</li><li>Снятие стресса и заряд позитивной энергии</li></ul><p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b> или оставьте заявку</p>",
      },
    ],
  },
  dance_mix: {
    hero: {
      description:
        "<h1>DANCE MIX</h1><p>Смешанный танец – так по-другому называют Dance Mix. Прекрасно развивает пластику и координацию движений, способствует укреплению здоровья, нормализует работу сердечно-сосудистой системы и кровоснабжения.</p>",
      images_url: {
        jpg: "/images/current_direction/dance_mix/result_direct_.jpg",
        webp: "/images/current_direction/dance_mix/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/dance_mix/result_direct_.jpg",
          webp: "/images/current_direction/dance_mix/result_direct_.webp",
        },
        content:
          "<strong>DANCE MIX</strong><br><b>Продолжительность:</b><span> 55 мин.</span><br><b>Уровень подготовленности:</b><span> для всех</span><br><p>Смешанный танец – так по-другому называют Dance Mix. Прекрасно развивает пластику и координацию движений, способствует укреплению здоровья, нормализует работу сердечно-сосудистой системы и кровоснабжения.</p><p>Dance mix — это смесь элементов разных танцевальных направлений прошлого и современности.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/dance_mix/result_direct_.jpg",
          webp: "/images/current_direction/dance_mix/result_direct_.webp",
        },
        content:
          "<p>Запишитесь на занятие по телефону <b>+7 (495) 859-03-72</b> или оставьте заявку</p>",
      },
    ],
  },
  personal_training: {
    hero: {
      description:
        "<h1>Персональный тренинг</h1><p>Индивидуальные занятия с инструктором выбирают клиенты, которые хотят получить максимальный результат в короткие сроки. Персональный тренер разрабатывает программу с учетом особенностей организма и норм безопасности, контролирует выполнение упражнений и следит за прогрессом.</p><p>В фитнес-центре «Мореон» доступны персональные тренировки по всем направлениям. Тренер совместно с врачом проведет фитнес-тестирование для определения уровня подготовки, состояния организма и состава тела, после чего составит оптимальную программу занятий.</p>",
      images_url: {
        jpg: "/images/current_direction/personal_training/result_direct_.jpg",
        webp: "/images/current_direction/personal_training/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/personal_training/result_direct_.jpg",
          webp: "/images/current_direction/personal_training/result_direct_.webp",
        },
        content:
          "<strong>Мотивация и поддержка</strong><p>Занятия фитнесом должны приносить не только пользу, но и радость, чувство гордости за свои достижения. Наши персональные тренеры - опытные психологи, которые помогут преодолеть любые трудности и будут искренне радоваться вашим успехам.</p><p>Тренер постоянно контролирует и корректирует программу тренировок, ставит достижимые цели и помогает их реализовать. Когда вы видите свой прогресс под руководством наставника, заниматься становится проще и эффективнее.</p>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/personal_training/result_direct_.jpg",
          webp: "/images/current_direction/personal_training/result_direct_.webp",
        },
        content:
          "<strong>Широкий спектр возможностей</strong><p>Персональный тренинг включает различные направления:</p><ul><li>Тренажерный зал</li><li>Восстановительные программы</li><li>Бассейн</li><li>Сайкл-студия</li><li>Танцевальные студии</li><li>Функциональный тренинг</li><li>Аэробика</li><li>Боевые искусства</li><li>Пилатес</li><li>Фитнес для детей и беременных</li><li>Йога</li></ul>",
      },
    ],
  },
  test: {
    hero: {
      description:
        "<h1>Анализ состава тела InBody за 60 секунд!</h1><p>InBody – это современный аппарат для точного анализа состава тела, который предоставляет подробную информацию о вашем организме.</p>",
      images_url: {
        jpg: "/images/current_direction/test/result_direct_.jpg",
        webp: "/images/current_direction/test/result_direct_.webp",
      },
    },
    description_direction: [
      {
        images_url: {
          jpg: "/images/current_direction/test/result_direct_.jpg",
          webp: "/images/current_direction/test/result_direct_.webp",
        },
        content:
          "<strong>Анализ состава тела InBody</strong><p>Определяет ключевые параметры организма:</p><ul><li>Общий вес тела</li><li>Массу мышечной ткани</li><li>Процент жировой ткани</li><li>Содержание воды и минералов</li><li>Распределение жира по зонам</li><li>Рекомендуемый калораж для поддержания веса</li></ul>",
      },
      {
        images_url: {
          jpg: "/images/current_direction/test/result_direct_.jpg",
          webp: "/images/current_direction/test/result_direct_.webp",
        },
        content:
          "<strong>Условия проведения анализа InBody</strong><p>Анализ включен в стоимость клубной карты (первичный), последующие исследования - 500 руб. Для клиентов с персональным тренером - бесплатно.</p><p>Получите точные данные о составе тела для разработки индивидуальной программы тренировок и питания!</p><p>Записаться можно по телефону: <b>+7 (495) 859-03-72</b></p>",
      },
    ],
  },
};

export const Current_direction_page = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const service = pathSegments[pathSegments.length - 1] as c;

  if (!current_direction_page_data || !service) return null;

  return (
    <ul>
      {current_direction_page_data[service].description_direction.map((el) => (
        <li>
          <div
            className="ab"
            dangerouslySetInnerHTML={{ __html: el.content }}
          ></div>
        </li>
      ))}
    </ul>
  );
};
