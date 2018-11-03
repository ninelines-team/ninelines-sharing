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
    <button class="social__button" type="button" data-social="ok">
        Одноклассники
    </button>
</div>
```

```js
import Share from 'ninelines-sharing';

Array.from(document.querySelectorAll('[data-social]')).forEach((link) => {
    link.addEventListener('click', () => {
        let url = location.origin + location.pathname;

        switch (event.currentTarget.dataset.social) {
            case 'facebook':
                Share.facebook(url);
                break;

            case 'vk':
                Share.vk(url);
                break;

            case 'twitter':
                Share.twitter(url);
                break;

            case 'ok':
                Share.ok(url);
                break;
        }
    });
});
```

> При отсутствии модульной системы библиотека (`dist/ninelines-sharing.js`) экспортирует `Share` в глобальный объект `ninelines`:
> ```js
> ninelines.Share.facebook(url);
> ```
