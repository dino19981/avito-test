###  Тестовое Avito
### deploy: https://avito-test.netlify.app/
### Структура и функционал приложения
### 1) Главная страница
1. Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
1. Каждая новость содержит:
1. название
1. рейтинг
1. ник автора
1. дату публикации
1. По клику на новость происходит переход на страницу новости
1. Список новостей должен автоматически обновляться раз в минуту без участия пользователя
1. На странице должна быть кнопка для принудительного обновления списка новостей
### 2) Страница новости
1. Должна содержать:
1. ссылку на новость
1. заголовок новости
1. дату
1. автора
1. счётчик количества комментариев
1. список комментариев в виде дерева
1. Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
1. Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
1. На странице должна быть кнопка для принудительного обновления списка комментариев
1. На странице должна быть кнопка для возврата к списку новостей
