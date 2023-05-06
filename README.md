# WebBuiltInFunction

## 1. customElements 속성

- https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements

## 2. WebComponents + ShadowDOM

1. 모듈 만들기

- this.attachShadow({mode : 'open'});
- this.shadowRoot
- customElements.define("custom-input", CLASS);

* this는 custom-input태그를 뜻함.

2. 템플릿으로 만들기

- this.shadowRoot.append(template1.content.cloneNode(true));

* <template id="template1">Html Code</template>
