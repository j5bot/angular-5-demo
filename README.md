# sturdy-robot

`sturdy-robot` is a simple project to display a feedback form, collect information from a user, and allow them
to return to their regular workflow.

While it is currently namespaced as 'app', this could and should be changed as the components involved lend
themselves to re-use without copying.  Much work was put into the effort to ensure that this would be the case.
Some successes were had and other challenges still remain to be overcome.

The `jest` testing framework is now being used as it is faster than karma, does not require a browser, and allows
for easy snapshotting of component and object output.  Snapshot comparison is one of the quickest ways to determine
whether systems are behaving as expected (when designed well).

The application on which this was based had a title of 'ModalFlow'.  That prefix was used for Actions and a couple
of other things throughout the application, as I thought it fit well enough.  This repo is only named `sturdy-robot`
as a random name that is easy to remember :)

Several of the unit test suites pass at this point.  As time went by, I was spending too much time fixing unit
tests and not getting to the actual development of the project code itself.

The same was true of my efforts to make the project more general purpose through dynamically adding fields to
components.  At a certain point, it had taken entirely too much time to attempt to achieve this functionality.

I still believe that both of these things: A) all code being covered with unit tests and passing, and B) components
being written in such a way that they are or can be general purpose are necessary goals in the context of a larger
team and for projects whose life expectancy is not short.

I plan to use the underlying techniques that I learned during my creation of this project to form the basis for a
tool to help my family manage my high-functioning autistic daughter's lists and schedules more effectively.


## Developing on sturdy-robot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://facebook.github.io/jest/).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
