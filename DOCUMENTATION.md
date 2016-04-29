# Overall code documentation and project layout


## Project structure
```
src
├── Utils.js                      Utility functions, handles disk persistance
├── actions                       Action creator functions, used with store
│   ├── dropbox.js
│   ├── history.js
│   └── meals.js
├── components                    UI Components
│   ├── AddLocationCard.js
│   ├── AddNutritionCard.js
│   ├── AddPhotoCard.js
│   ├── Button.js
│   ├── Card                      Reusable "Card" Component, base of UI
│   │   ├── Body.js
│   │   ├── Header.js
│   │   ├── Title.js
│   │   └── index.js
│   ├── CheckButton.js
│   ├── CirclePlusIcon.js
│   ├── CloseButton.js
│   ├── DayViewFactory.js
│   ├── HistoryView.js
│   ├── LoadingView.js
│   ├── MealCard.js
│   ├── NutritionBody.js
│   ├── NutritionChart.js
│   ├── NutritionLegend.js
│   ├── NutritionLegendIcon.js
│   ├── PermissionWrap.js
│   ├── TopNav.js
│   └── TopNavLink.js
├── constants                     Constants used throughout the app
│   ├── ActionTypes.js
│   ├── Colors.js
│   ├── Dropbox.js
│   ├── Images.js
│   ├── PageNames.js
│   ├── PagesMap.js
│   └── SharedStyle.js
├── images
│   └── icons
                                  (... all icons used as PNG file)
├── pages                         Upper level components
│   ├── ComingSoon.js
│   ├── Main.js
│   ├── Modal.js
│   ├── Settings.js
│   └── index.js
├── reducers                      Redux reducers
│   ├── database.js
│   ├── dropbox.js
│   ├── history.js
│   ├── index.js
│   ├── loading.js
│   └── meals.js
├── store                         The redux store, used as cache
│   └── index.js
└── xhr                           Dropbox client methods
    └── Dropbox.js
```
