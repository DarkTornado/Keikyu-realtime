var axios = require('axios');

module.exports = async function(lineId) {
    const stns = getStationList(lineId);
    if (stns == null) return [];
    
    const trains = await getTrainList();
    const result = [];
    stns.forEach((e, i) => {
        result[i] = {
            stn: {
                ko: e.k,
                ja: e.j
            },
            up: [],
            down: []
        }
        trains.forEach((e) => {
            if (e.stnId != stns[i].id) return;
            result[i][e.updown].push({
                no: e.no,
                type: e.type,
                status: e.status
            });
        });
    });

    return result;
};

async function getTrainList() {
    const url = 'https://app-kq.net/api/train';
    const response = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'referer': 'https://app-kq.net/web/jp/html/zaisen.html'
        }
    });

    const types = {
        '1': '쾌특',
        '2': '특급',
        '3': '급행',
        '4': '보통',
        '6': '에어포트 쾌특',
        '12': 'Wing',
        '8': '?' //아마도 회송 또는 주박
    }

    const result = [];
    response.data.forEach((e, i) => {
        result[i] = {
            no: e.train_no,
            stnId: e.position.replace(/[^(0-9S)]/g, ''),
            updown: e.direction == '2' ? 'up' : 'down',
            type: types[e.train_kind] ? types[e.train_kind] : '?',
            status: e.platform == '0' ? '접근' : '도착'
        };
    });

    return result;
}

function getStationList(lineId) {
    switch (lineId) {
        case 'main':
        case 'honsen':
            return [{k:'시나가와',j:'品川',id:'001'},{k:'키타시나가와',j:'北品川',id:'002'},{k:'신반바',j:'新馬場',id:'003'},{k:'아오모노요코초',j:'青物横丁',id:'004'},{k:'사메즈',j:'鮫洲',id:'005'},{k:'타치아이가와',j:'立会川',id:'006'},{k:'오모리카이간',j:'大森海岸',id:'007'},{k:'헤이와지마',j:'平和島',id:'008'},{k:'오모리마치',j:'大森町',id:'009'},{k:'우메야시키',j:'梅屋敷',id:'010'},{k:'케이큐카마타',j:'京急蒲田',id:'011'},{k:'죠시키',j:'雑色',id:'018'},{k:'로쿠고도테',j:'六郷土手',id:'019'},{k:'케이큐카와사키',j:'京急川崎',id:'020'},{k:'핫쵸나와테',j:'八丁畷',id:'027'},{k:'츠루미이치바',j:'鶴見市場',id:'028'},{k:'케이큐즈루미',j:'京急鶴見',id:'029'},{k:'카게츠소지지',j:'花月総持寺',id:'030'},{k:'나마무기',j:'生麦',id:'031'},{k:'케이큐신코야스',j:'京急新子安',id:'032'},{k:'코야스',j:'子安',id:'033'},{k:'가나가와신마치',j:'神奈川新町',id:'034'},{k:'케이큐히가시카나가와',j:'京急東神奈川',id:'035'},{k:'가나가와',j:'神奈川',id:'036'},{k:'요코하마',j:'横浜',id:'037'},{k:'토베',j:'戸部',id:'038'},{k:'히노데초',j:'日ノ出町',id:'039'},{k:'코가네초',j:'黄金町',id:'040'},{k:'미나미오타',j:'南太田',id:'041'},{k:'이도가야',j:'井土ヶ谷',id:'042'},{k:'구묘지',j:'弘明寺',id:'043'},{k:'카이오오카',j:'上大岡',id:'044'},{k:'뵤부가우라',j:'屏風浦',id:'045'},{k:'스기타',j:'杉田',id:'046'},{k:'케이큐토미오카',j:'京急富岡',id:'047'},{k:'노켄다이',j:'能見台',id:'048'},{k:'카나자와분코',j:'金沢文庫',id:'049'},{k:'카나자와핫케이',j:'金沢八景',id:'050'},{k:'옷파마',j:'追浜',id:'054'},{k:'케이큐타우라',j:'京急田浦',id:'055'},{k:'안진즈카',j:'安針塚',id:'056'},{k:'헤미',j:'逸見',id:'057'},{k:'시오이리',j:'汐入',id:'058'},{k:'요코스카츄오',j:'横須賀中央',id:'059'},{k:'켄리츠다이가쿠',j:'県立大学',id:'060'},{k:'호리노우치',j:'堀ノ内',id:'061'},{k:'케이큐오츠',j:'京急大津',id:'062'},{k:'마보리카이간',j:'馬堀海岸',id:'063'},{k:'우라가',j:'浦賀',id:'064'}];
        case 'airport':
        case 'kuukou':
            return [{k:'케이큐카마타',j:'京急蒲田',id:'011'},{k:'코지야',j:'糀谷',id:'012'},{k:'오토리이',j:'大鳥居',id:'013'},{k:'아나모리이나리',j:'穴守稲荷',id:'014'},{k:'텐쿠바시',j:'天空橋',id:'015'},{k:'하네다공항제3터미널',j:'羽田空港第３ﾀｰﾐﾅﾙ',id:'016'},{k:'하네다공항제1·제2터미널',j:'羽田空港第１・第２ﾀｰﾐﾅﾙ',id:'017'}];
        case 'zushi':
            return [{k:'카나자와핫케이',j:'金沢八景',id:'050'},{k:'무츠우라',j:'六浦',id:'051'},{k:'진무지',j:'神武寺',id:'052'},{k:'즈시·하야마',j:'逗子・葉山',id:'053'}];
        case 'kurihama':
            return [{k:'호리노우치',j:'堀ノ内',id:'061'},{k:'신오츠',j:'新大津',id:'065'},{k:'키타쿠리하마',j:'北久里浜',id:'066'},{k:'케이큐쿠리하마',j:'京急久里浜',id:'067'},{k:'YRP노비',j:'YRP野比',id:'068'},{k:'케이큐나가사와',j:'京急長沢',id:'069'},{k:'츠쿠이하마',j:'津久井浜',id:'070'},{k:'미우라카이간',j:'三浦海岸',id:'071'},{k:'미사키구치',j:'三崎口',id:'072'}];
        case 'daishi':
            return [{k:'케이큐카와사키',j:'京急川崎',id:'S020'},{k:'미나토쵸',j:'港町',id:'021'},{k:'스즈키쵸',j:'鈴木町',id:'022'},{k:'카와사키다이시',j:'川崎大師',id:'023'},{k:'히가시몬젠',j:'東門前',id:'024'},{k:'다이시바시',j:'大師橋',id:'025'},{k:'코지마산덴',j:'小島新田',id:'026'}];            
    }
    return null;
}


