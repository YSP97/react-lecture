# 과제 -1

## figma 시안

![image](https://github.com/user-attachments/assets/b0280abc-7c2a-424a-be43-d8591b2e3a29)

## 결과

![image](https://github.com/user-attachments/assets/4dcb0716-e195-43f8-ba04-6199d1bf4f23)

## 마크업

1. 대제목

```html
<h1 class="sr-only">Architectures</h1>
```

대제목을 설정하고 싶어서 대제목을 적고 시안에는 대제목이 없었기 때문에 sr-only 처리를 해주고자 클래스를 지정하였다.

2. list-item: Item들을 나열하는 형식이라 ul에 하위로 li를 사용하여 item들을 나열하였다.

```html
<li class="item">
  <figure>
    <img
      src="/02-design-handoff/assets/building design.png"
      alt="빌딩 디자인"
    />
    <figcaption>Building design</figcaption>
  </figure>
</li>
```

3. 아이템의 이미지 옆에 캡션이 붙어있는 형식이라 figure을 이용하여 img 태그를 사용했고 figcaption을 함께 붙여주었다.
4. img의 alt 속성을 지정해주는 게 너무 어려웠다. 그냥 해당 이미지 cation에 해당하는 내용을 한국어로 적어 놓았는데 더 적절한 게 있을지 모르겠다.

## 스타일링

1. sr-only: 스크린 사용자에게 대제목을 읽어주되 화면에는 보이지 않도록 대제목의 sr-only 스타일링 처리해주었다.
2. pretendard 폰트를 시안에서 사용했기 때문에 웹 서버에서 제공하는 폰트를 css안에서 가져와 적용하였다.
3. 기본적으로 ul, li의 스타일이 있어 보통 reset.css와 같은 파일을 이용하여 기본 스타일을 초기화한 뒤 스타일링을 진행하지만 간단한 과제이기 때문에 모든 선택자에 margin과 padding을 0으로 주었다.
4. 아이템들은 모두 열로 정렬되어 있어 flex의 direction을 column으로 주고 아이템 간 간격(gap)을 주었다.
5. 아이템의 이미지와 캡션의 간격과 정렬을 위해 flex direction을 row로 주고 gap을 주었다.
6. img 사이즈가 고정되어있어 가로, 세로 64px을 주었다.
7. 캡션 스타일이 시안에서 화면 사이즈가 줄어들면 폰트가 줄바꿈이 되는 걸 확인할 수 있기 때문에 임의의 width와 `word-wrap: break-word;`을 주어 줄바꿈이 되도록 했다.
