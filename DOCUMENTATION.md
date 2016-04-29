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

### App Structure

The app is built using UI components. Components are small pieces of UI code that act mostly like functions. Each component returns a view which is then rendered by React Native. Some components do maintain some internal state. All views rendered by each component are pure functions of state and properties passed to them.


## Pages

There are four main pages within the app...

### Today/Yesterday

This is the primary view of the app. It displays the most recent meals entered. These components are generated using the `DayViewFactory` which is passed what day to display and returns a new component that can be displayed.

### History

This page pulls nutrition information from all meals ever logged and displays a weekly overview.

### Settings

This shows the about information and allows the user to toggle Dropbox sync.

### Modal

This allows the creation and editing of meal entries.


## Highlighted components

### `<Card />`

The `Card` component is used throughout the app as the main UI element. Is is used to display everything from meal entries to photos, location, and nutrition information. This establishes a consistent and understandable design.

### `<PermissionWrap />`

The `PermissionWrap` component allows the delayed invoking of code until certain permission has been granted by the user. This prevents the user from being bombarded with promptes when first opening the app and pairs asking for permission with intent to use that permission. For example, this component says "Enable location services to track location", when pressed it prompts the user for access, and once granted, allows passthrough to the `<AddLocationCard />`

## Data storage and cache

The app uses Redux as a means for main application state maintenance. The app state is stored as a single JavaScript object and used throughout the app. The shape of the state is as follows:

```javascript
{
  meals: {
    [date]: {
      Breakfast: { ... },
      Lunch: {
        photo: string,
        nutrition: {
          calories: number,
          carbs: number,
          fats: number,
          protein: number,
          fiber: number
        },
      Dinner: { ... }
    }
    ...
  },
  loading: {
    [key]: boolean,
  },
  dropbox: {
    isLoggedIn: boolean,
    token: string,
  },
  database: Array<[date strings]>,
  history: {
    // Similar to meals but keyed on `year-weekNumber` and only stores
    // nutrition information
  }
}
```

Some keys of state are persisted constantly and in their entirety to disk. These keys are database and dropbox. This means that a user will stay logged in to dropbox across sessions of the app.

Other keys are used as cache and the persisted information is only on disk until "requested" by the app. At which point `loading` is set to true for that key until it has been pulled from disk and exists in the store cache. This prevents large amounts of memory use and speed up the app overall.

## Some words on Redux

To view all of redux's paterns and uses, [view the documentation](http://redux.js.org/index.html).

Redux maintains app state through the use of reducer functions. App state is stored as a single object. This object can be changed only through dispatching actions. Actions are also objects. Actions have a `type` property and a `payload`. Type is always a string from the `ActionTypes` file. Each key on the state object has a respective reducer function. This function switches on the action type and returns a new object. All reducers have a default case where they return the current state.

This means that application interaction and state can be modeled as an initial state and a sequence of actions. These actions are "reduced" (see [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)) into the next state.
