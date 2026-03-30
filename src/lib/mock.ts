import type { Question } from './types'

export const QUESTION_BANK: Question[] = [
  {
    id: 'q01',
    text: '聖誕老人的現代形象（紅色大衣、白鬍子）最早是由哪間公司的廣告推廣而流行的？',
    options: ['可口可樂', '百事可樂', '雀巢', '麥當勞'],
    correctIndex: 0,
    explanation:
      '可口可樂自 1930 年代開始在廣告中使用身穿紅色大衣的聖誕老人形象，畫家 Haddon Sundblom 的插畫讓這個形象深入人心並流傳至今。',
  },
  {
    id: 'q02',
    text: '聖誕老人的故鄉傳說上位於哪個國家？',
    options: ['芬蘭', '挪威', '冰島', '瑞典'],
    correctIndex: 0,
    explanation:
      '根據傳說，聖誕老人住在芬蘭北部的拉普蘭地區（Lapland），首都羅瓦涅米（Rovaniemi）更設有官方的「聖誕老人村」。',
  },
  {
    id: 'q03',
    text: '「平安夜（Silent Night）」這首聖誕歌是哪個國家創作的？',
    options: ['奧地利', '德國', '英國', '美國'],
    correctIndex: 0,
    explanation:
      '平安夜由奧地利神父 Joseph Mohr 作詞、Franz Xaver Gruber 作曲，1818 年在奧地利歐本多夫的教堂首次演唱。',
  },
  {
    id: 'q04',
    text: '聖誕節的英文「Christmas」中，「Christ」指的是誰，「mas」源自哪個詞？',
    options: ['基督、彌撒', '聖誕老人、節日', '天使、祈禱', '耶穌、聚會'],
    correctIndex: 0,
    explanation:
      'Christmas = Christ（基督/耶穌）+ mas（源自古英語 mæsse，意指彌撒 Mass）。所以 Christmas 字面意思是「基督的彌撒」。',
  },
  {
    id: 'q05',
    text: '掛聖誕樹的習俗最早起源於哪個國家？',
    options: ['德國', '英國', '法國', '美國'],
    correctIndex: 0,
    explanation:
      '聖誕樹的習俗源自 16 世紀的德國，人們把常青樹帶進家中布置。後來透過維多利亞女王的德裔丈夫阿爾伯特親王傳入英國，再傳遍全世界。',
  },
  {
    id: 'q06',
    text: '聖誕老人的馴鹿中，哪一隻是後來才加入的「新成員」且鼻子是紅色的？',
    options: ['魯道夫（Rudolph）', '丹瑟（Dancer）', '布利茲恩（Blitzen）', '孔美特（Comet）'],
    correctIndex: 0,
    explanation:
      '魯道夫是 1939 年由 Robert L. May 為 Montgomery Ward 百貨公司創作的角色，後來因為歌曲「Rudolph the Red-Nosed Reindeer」而家喻戶曉。',
  },
  {
    id: 'q07',
    text: '澳洲人過聖誕節時，天氣通常是什麼樣子？',
    options: ['炎熱的夏天', '寒冷的冬天', '溫暖的春天', '涼爽的秋天'],
    correctIndex: 0,
    explanation:
      '澳洲位於南半球，12 月是夏季，所以澳洲人常在炎熱的天氣中過聖誕節，BBQ 烤肉是當地常見的聖誕節慶活動。',
  },
  {
    id: 'q08',
    text: '日本人在聖誕夜有什麼特別的飲食習俗？',
    options: ['吃肯德基炸雞', '吃壽司', '吃拉麵', '吃天婦羅'],
    correctIndex: 0,
    explanation:
      '日本肯德基自 1974 年推出「聖誕炸雞套餐」行銷活動後，在聖誕夜吃肯德基成為日本獨特的文化習俗，每年聖誕節前數週就要預訂。',
  },
  {
    id: 'q09',
    text: '「聖誕節」的日期 12 月 25 日，在聖經中有明確記載是耶穌的生日嗎？',
    options: ['沒有，聖經未記載具體日期', '有，明確記載是 12 月 25 日', '有，但記載是 12 月 24 日', '沒有，但教會從古代就知道'],
    correctIndex: 0,
    explanation:
      '聖經中並未明確記載耶穌的出生日期。12 月 25 日是在西元 4 世紀由羅馬教會確立，部分歷史學家認為此日期可能是為了與羅馬的冬至節慶合併。',
  },
  {
    id: 'q10',
    text: '在英國，聖誕節的第二天（12 月 26 日）叫做什麼節？',
    options: ['節禮日（Boxing Day）', '禮物節（Gift Day）', '感恩節（Thanksgiving）', '新年前節（New Year\'s Eve）'],
    correctIndex: 0,
    explanation:
      'Boxing Day 是英國、加拿大、澳洲等英語系國家的節日，名稱源自過去貴族將聖誕禮物裝箱（box）送給僕人的傳統，現在也是大型購物折扣日。',
  },
  {
    id: 'q11',
    text: '聖誕歌「Jingle Bells」原本是為哪個節日而寫的？',
    options: ['感恩節', '聖誕節', '新年', '復活節'],
    correctIndex: 0,
    explanation:
      'Jingle Bells 由 James Lord Pierpont 創作於 1857 年，原本是為感恩節的雪橇競賽活動而作，後來才漸漸被視為聖誕歌曲。',
  },
  {
    id: 'q12',
    text: '西班牙和拉丁美洲傳統上，孩子們在哪一天才收到聖誕禮物？',
    options: ['1 月 6 日（三王節）', '12 月 25 日（聖誕節）', '12 月 24 日（平安夜）', '1 月 1 日（新年）'],
    correctIndex: 0,
    explanation:
      '在西班牙及許多拉丁美洲國家，傳統上孩子在「三王節」（Día de Reyes，1 月 6 日）才收到禮物，紀念東方三博士帶禮物給嬰孩耶穌的故事。',
  },
  {
    id: 'q13',
    text: '以下哪首歌曲創下了史上最暢銷聖誕歌曲的紀錄？',
    options: ['White Christmas', 'All I Want for Christmas Is You', 'Silent Night', 'Jingle Bell Rock'],
    correctIndex: 0,
    explanation:
      'Bing Crosby 演唱的「White Christmas」（1942年）至今仍是全球銷量最高的聖誕歌曲之一，估計全球銷量超過 5000 萬張。',
  },
  {
    id: 'q14',
    text: '聖誕老人（Santa Claus）的名字來源於哪個語言的「聖尼古拉斯」？',
    options: ['荷蘭語（Sinterklaas）', '拉丁語（Sanctus Nikolaus）', '德語（Sankt Nikolaus）', '法語（Saint Nicolas）'],
    correctIndex: 0,
    explanation:
      'Santa Claus 源自荷蘭語的「Sinterklaas」，是「Sint Nikolaas（聖尼古拉斯）」的縮寫。荷蘭移民將這個傳統帶到美洲後，名稱演變成 Santa Claus。',
  },
  {
    id: 'q15',
    text: '聖誕節的傳統顏色紅色和綠色，分別象徵什麼？',
    options: ['聖誕老人的衣服和常青樹', '耶穌的血和希望', '火焰和自然', '蘋果和冬青葉'],
    correctIndex: 0,
    explanation:
      '雖然有多種說法，最廣為接受的解釋是：紅色來自聖誕老人的紅色大衣（及冬青的紅果），綠色代表冬天也不凋零的常青植物如松樹和冬青葉。',
  },
  {
    id: 'q16',
    text: '聖誕節前夕（12 月 24 日）在德國稱為什麼？',
    options: ['Heiligabend（神聖之夜）', 'Weihnachtsabend（聖誕前夜）', 'Winterfest（冬季節）', 'Stille Nacht（靜夜）'],
    correctIndex: 0,
    explanation:
      '德語中 12 月 24 日稱為「Heiligabend」，意思是「神聖的夜晚」。德國人通常在這天晚上開始主要的聖誕節慶典和交換禮物。',
  },
  {
    id: 'q17',
    text: '傳統的聖誕布丁（Christmas Pudding）起源於哪個國家？',
    options: ['英國', '法國', '德國', '愛爾蘭'],
    correctIndex: 0,
    explanation:
      '聖誕布丁是英國的傳統聖誕甜點，歷史可追溯至中世紀。傳統上要在降臨節（Advent）的第一個星期天開始製作，讓味道充分融合。',
  },
  {
    id: 'q18',
    text: '「十二天聖誕節」歌曲（The Twelve Days of Christmas）中，第一天的禮物是什麼？',
    options: ['梨樹上的鷓鴣', '兩隻斑鳩', '金環', '天鵝游泳'],
    correctIndex: 0,
    explanation:
      '「The Twelve Days of Christmas」歌曲中，「我的真愛」送的第一份禮物是「梨樹上的一隻鷓鴣（a partridge in a pear tree）」。',
  },
  {
    id: 'q19',
    text: '愛爾蘭有一個特別的聖誕節習俗：在窗戶上放什麼？',
    options: ['蠟燭', '常青樹枝', '彩色玻璃', '聖誕老人公仔'],
    correctIndex: 0,
    explanation:
      '愛爾蘭的傳統習俗是在平安夜的窗戶上點一根蠟燭，象徵為旅途中的瑪利亞和約瑟夫指路，也代表歡迎陌生人進入家中。',
  },
  {
    id: 'q20',
    text: '「Xmas」中的「X」代表什麼意思？',
    options: ['希臘字母 Chi，代表基督（Christ）', '英文字母 X，表示神秘', '十字架的符號', '羅馬數字 10'],
    correctIndex: 0,
    explanation:
      '「X」來自希臘字母「Chi（χ）」，是「Christos（基督）」這個希臘詞的第一個字母。所以「Xmas」並非「去掉基督的聖誕節」，而是古老的縮寫方式。',
  },
]

export function getRandomQuestions(count: number = 10): Question[] {
  const shuffled = [...QUESTION_BANK].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
