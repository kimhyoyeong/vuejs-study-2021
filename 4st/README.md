# 4주차  v-model

vue에서는 v-model을 사용해서 입력 값, 선택 값등을 데이터와 동기화하는 **양방향 데이터 바인딩**이 가능 하다

<br>

## 입력 양식 핸들링

### v-model 사용 방법

v-model에 사용자 입력과 동기화할 데이터를 지정

> 아래는 텍스트 입력 값과 message 속성을 바인딩 한것

```html
<div id="app">
	<input type="text" v-model="message">
	<p>{{message}}</p>
</div>

<script>
new Vue({
    el:'#app',
    data:{
        message:'hello!'
    }
})
</script>
```

https://jsfiddle.net/hyokim/qy2n4dzw/

<br>

#### 양방향 데이터 바인딩

v-model은 다음과 같은 두 가지 처리를 한 번에 작성할 수 있게 해줌

1. 데이터 바인딩하기 (데이터 바인딩으로 요소의 value  속성 변경하기)

> 데이터를 DOM 요소에 데이터에 바인딩해서, 데이터의 변경을 감지 할때마다, 연결된 DOM 요소를 자동으로 변경
>
> v-bind:value="message"

2. 이벤트 바인딩하기(이벤트 핸들링으로 받은 값을 데이터에 대입하기)

> input 요소처럼 사용자로부터 어떤 입력을 받는 DOM 요소의 경우, 
>
> 사용자의 입력 이벤트를 트리거로 하여 데이터를 얻음
>
> @input > event.target.value

**▶ 모두 한번에 자동화!**

<br>

### v-model로 받은 데이터의 자료형

일반적인 입력 양식은 모든 값을 **문자열** 자료형으로 다루며, 

체크박스의 경우 **배열**로 다룸,

하지만, 일부 입력 양식은 이 입력 양식의 형태에 따라서 값을 다루는 방식이 다름



**▶ v-model을 사용할 때는 속성 값을 사용하지않음**

> 입력 양식의 값이나 선택되어 있는 것은 항상 v-model에 바인딩 한것과 동기화 됨
>
> 따라서  value, checked, selected를 설정해도 이러한 속성은 무시됨



<br>

### v-model 장식자

| 장식자  | 의미                                |
| ------- | ----------------------------------- |
| .lazy   | input 대신 change 이벤트 핸들링하기 |
| .number | 값을 숫자로 변환                    |
| .trim   | 값 양쪽에 있는 공백 제거하기        |

- **.lazy** 
  기본적으로 입력 양식은 입력이 되는 시점 
  해당 장식자를 사용하면 change 이벤트가 발생하는 시점에 변경됨 초점이 제거되나, 엔터키를 눌렀을때 발생
- **.number**
  type="number"를 지정하더라고, input 요소의 value는 문자열로 들어감 바꾸고싶은경우 사용!
- **.trim**
  문자열 앞뒤 공백, 줄바꿈 등 제거해줌



예) .number 장식자 사용 경우

```html
<div id="app">
	<input type="text" v-model.number="price">
	<p>{{price}}</p>
</div>

<script>
new Vue({
    el:'#app',
    data:{
        price:100
    }
})
</script>
```

https://jsfiddle.net/hyokim/1uo4t6xj/



<br>

<br>

## 컴포넌트의 양방향 데이터 바인딩

컴포넌트는 기본적으로 props down ▼  또는 event up▲과 같은 단방향 데이터 흐름

하지만, 입력 양식처럼 자동으로 양방향 데이터 바인딩을 실시 할 수있음

<br>

### 컴포넌트의 v-model

v- model을 컴포넌트에 데이터를 바인딩하면,

input 이벤트 발생시 데이터를 부모에게 보내줄수 있음 할수 있음 = $emit

`부모 템플릿`

```html
<my-component v-model="data"/>
```

`자식메서드`

```javascript
this.$emit('input','부모로 던지는 텍스트으으으')
```

<br>



### v-model의 값은 어디에 바인딩?

디폴트로 속성 **value**에 바인딩됨

하지만, 자식 컴포넌트에서 현재 값에 접근하려면  props를 사용해서 명시적으로 전달 해줘야함! 

```javascript
props:['value']
```

<br>

**▶ 체크박스?**

> 체크박스 컴포넌트를 만들때 단일값이 아닌경우 value 값이 배열로 넘어옴
>
> 각각 체크박스의 값은 val로 넘겨주고 
>
> 체크된 val값을 value 배열에 추가해준 후 그 배열을 $emit 시킴
>

```html
<c-check
		v-model="formData.checkList"
		val="Javascript"
		v-bind:checked="true"/>
<c-check
		v-model="formData.checkList"
		val="HTML"/>
```

```html
<template>
	<span>
		<label>
			<input type="checkbox"
				v-bind:value="val"
				v-bind:checked="checked"
				v-on:input="checkValue"/>
			{{val}}
		</label>
	</span>
</template>
<script>
export default {
	name: 'cCheck',
	props: {
		val: [String, Number],//각각의 value 값
		value: [Array, Boolean],//v-model 바인딩 되는 값(즉 배열 또는 단일 체크)
		checked: {
			default:false,
			type:Boolean
		},
	},
	methods: {
		checkValue: function() {
			let valArr = this.value;//바인딩된 배열을 받아옴
			if (this.value instanceof Array) {//배열형태이면
				if (event.target.checked) {//체크가되면
					valArr.push(this.val);//배열에 해당 값 추가
				} else {
					valArr.splice(valArr.indexOf(this.val), 1);//배열해 해당 값 제거
				}
				this.$emit('input', valArr);//배열 부모에게 던짐
			} else {
				this.$emit('input', event.target.checked);//단일 속성일 경우 boolean값 던져줌
			}
		},
	},
	//이하생략
	
};
</script>
```

<br>

### 사용자 정의 v-model

value 속성을 다른 목적으로 사용하거나, 다른 이벤트를 사용하고 싶은 경우에는

**model 옵션**을 사용해서 설정을 변경할수 있음

```javascript
model:{
	prop:'current',
	//value가 아닌 current로 할당하고 싶은 경우
	event:'change'
	//이벤트를 change로 사용하고 싶은 경우
},
props:{
    current:String
},
created:function(){
    this.$emit('change','2021-04-01')
}
```


