/**
 * 상품 데이터 파일
 *
 * 새 상품 추가 방법: 아래 배열에 객체를 추가하세요.
 *   name     : 상품명
 *   category : 카테고리 (audio | tech | life | food)
 *   price    : 가격 문자열
 *   image    : 상품 이미지 URL (직사각형 4:3 권장)
 *   desc     : 한줄 설명
 *   link     : 쿠팡 파트너스 링크 (YOUR_LINK_HERE 를 실제 링크로 교체)
 */
const PRODUCTS = [
  {
    name: "Audio-Technica ATH-M50x 헤드폰",
    category: "audio",
    price: "189,000원",
    image: "https://via.placeholder.com/600x450/1a1a2e/a855f7?text=ATH-M50x",
    desc: "스튜디오 모니터링 헤드폰의 정석, 플랫한 사운드",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "Focusrite Scarlett 2i2 오디오 인터페이스",
    category: "audio",
    price: "179,000원",
    image: "https://via.placeholder.com/600x450/2d1b4e/06b6d4?text=Scarlett+2i2",
    desc: "홈레코딩 필수템, 저레이턴시 USB-C",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "RODE NT1-A 콘덴서 마이크",
    category: "audio",
    price: "269,000원",
    image: "https://via.placeholder.com/600x450/0f0f1a/a855f7?text=RODE+NT1-A",
    desc: "보컬 레코딩의 베스트셀러, 초저노이즈",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "KRK Rokit 5 G4 모니터 스피커",
    category: "audio",
    price: "249,000원",
    image: "https://via.placeholder.com/600x450/1a0a2e/ec4899?text=KRK+Rokit+5",
    desc: "믹싱 모니터링의 기본, DSP 보정 기능 탑재",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "Apple MacBook Air M3",
    category: "tech",
    price: "1,390,000원",
    image: "https://via.placeholder.com/600x450/16213e/06b6d4?text=MacBook+Air",
    desc: "음악 작업용 최적 노트북, Logic Pro 완벽 호환",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "삼성 갤럭시 버즈3 프로",
    category: "tech",
    price: "249,000원",
    image: "https://via.placeholder.com/600x450/1a1a2e/a855f7?text=Galaxy+Buds3",
    desc: "ANC 최강, 일상 리스닝과 모니터링 겸용",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "AKAI MPK Mini MK3 미디 키보드",
    category: "audio",
    price: "89,000원",
    image: "https://via.placeholder.com/600x450/2d1b4e/a855f7?text=MPK+Mini",
    desc: "비트메이킹 입문 필수, 25건반 미니 컨트롤러",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "곰곰 견과류 하루한줌 30봉",
    category: "food",
    price: "15,900원",
    image: "https://via.placeholder.com/600x450/1a2e1a/06b6d4?text=Nuts+Pack",
    desc: "작업실 간식으로 딱, 개별포장이라 편리",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "무인양품 아로마 디퓨저",
    category: "life",
    price: "39,900원",
    image: "https://via.placeholder.com/600x450/1a1a2e/ec4899?text=Aroma+Diffuser",
    desc: "작업실 분위기 메이커, 은은한 조명까지",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  }
];