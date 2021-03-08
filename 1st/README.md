# 1주차 - 복습

> MDN WebDoc 표준과 Virtual DOM

------



## 커스텀 엘리먼트

```html
<word-count></word-count>
```

위 와 같은 새로운 이름의 태그를 마음대로 등록하여 사용할수 있음

customElements.define() 메소드를 사용

```javascript
class WordCount extends HTMLParagraphElement {//WordCount 클래스는 HTMLParagraphElement 기본 기능을 상속받아서 사용
	constructor() {
		super();//기본기능을 사용하기위해 호출 필수
        
		//커스텀 엘리먼트의 기능들을 여기에 작성합니다.
	}
}

customElements.define('word-count', WordCount, { extends: 'p' });
//커스텀 엘리먼트를 등록하는 방법 : word-count 태그와 주어진 클래스(WordCount)를 묶는 역할
```





------



## Shadow DOM

페이지내 다른 코드와 분리하고  충돌하지 않게끔 캡슐화 

쉐도우 돔은 돔 자체의 분리 역할 DOM 스코프의 경계선 만듬

element.attachShadow({ mode: 'open' })

- 쉐도우 돔: 아래의 코드에서 h1, p등 쉐도우 루트에 붙어있는 DOM
- 쉐도우 루트: `#shadow-root` 
- 쉐도우 호스트: 쉐도우 루트의 부모. 아래의 코드에서 
- 라이트 돔: 도큐먼트의 쉐도우 호스트에 붙어있는 노드들.

```html
<h2>템플릿내에 선언된 style에 영향을 받지 않음</h2>

<word-count></word-count>

<template id="word-template">
	<style>
		h2{color:#f00}
	</style>
	<h2>타이틀</h2>
</template>

<script>
class WordCount extends HTMLElement {
	constructor() {
		super();

		let template = document.getElementById('word-template');
		const shadow = this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
        //커스텀 엘리먼트에 shadow Root 생성되고 Shadow DOM에 템플릿 컨텐츠가 복제되어 삽입됨
	}
}
customElements.define('word-count', WordCount);
</script>
```



------



## Template & Slot

재사용성을 늘려주기 위한 기능



### template

동일한 구조를 반복해서 코딩하는것보다 템플릿을 사용하면도움이됨

**이 요소는 DOM 에서 렌더링 되지 않지만, JavaScript를 사용하여 계속 참조할 수 있음**

> 스크립트와 스타일은 템플릿에 있을때는 적용되지 않지만, 복사되어 Document에 붙을 때에 적용된다. 쉐도우 돔(Shadow DOM)과 시너지를 일으켜 웹 컴포넌트의 템플릿 기능을 수행하는 데 충분한 장점이라 할 수 있다.

```html
<template id="template-type">
	<strong>와우</strong>
	<p>333</p>
</template>

<script>
document.body.appendChild(document.getElementById('template-type').content)
</script>
```



-----------------------------------------------------

### slot

쉐도우 돔의 슬롯이 가진 이름에 맞는 라이트 돔의 노드가 각 슬롯에 삽입됨

(슬롯의 이름에 맞는 라이트 돔이 자리나타남)

슬롯에 렌더링시킬 대비책(즉 기본값)을 지정해놓는 것이 유용

```html
<word-count>
	<div slot="title"><h2>타이틀1</h2></div>
    //위 name과 같은 태그가 없으면 아래가 기본값으로 노출됨
</word-count>
//커스텀 엘리먼트에는 템플릿에 들어가는 slot에 치환될 요소들만 넣으면됨

<template id="word-template">
	<style>
		[name="title"]{color:#f00}
	</style>
	<slot name="title"><h2>타이틀을 입력해주세요</h2></slot>
</template>

<script>
class WordCount extends HTMLElement {
	constructor() {
		super();
		let template = document.getElementById('word-template');
		const shadow = this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
	}
}
customElements.define('word-count', WordCount);
</script>
```

