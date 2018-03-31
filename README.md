# ninelines-sharing

Библиотека для шаринга в социальных сетях.

## Установка

### NPM

```
npm install --save ninelines-sharing
```

## Использование

```html
<div class="social">
    <button class="social__button" type="button" data-social="facebook">
        Facebook
    </button>
    <button class="social__button" type="button" data-social="vk">
        VK
    </button>
    <button class="social__button" type="button" data-social="twitter">
        Twitter
    </button>
    <button class="social__button" type="button" data-social="google">
        Google Plus
    </button>
    <button class="social__button" type="button" data-social="ok">
        Одноклассники
    </button>
</div>
```

```js
import {Share} from 'ninelines-sharing';

document.querySelectorAll('[data-social]').forEach((link) => {
    link.addEventListener('click', (event) => {
    	event.preventDefault();
    	
        switch (event.currentTarget.dataset.social) {
            case 'facebook':
                Share.facebook(location.pathname);
                break;
                
            case 'vk':
                Share.vk(location.pathname);
                break;
            
            case 'twitter':
                Share.twitter(location.pathname);
                break;
            
            case 'google':
                Share.google(location.pathname);
                break;
            
            case 'ok':
                Share.ok(location.pathname);
                break;
        }
    });
});
```
