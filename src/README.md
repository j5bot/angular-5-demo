# Instructions

## Prompt

We are interested in creating a test application to gather feedback from users.  The feedback will be gathered then confirmed in a modal dialog.

### Business Requirements 

The user will visit our homepage (`AppComponent`) and select the "Enter" button.  The "Enter Button" should open a modal over the homepage and create a grey overlay over the homepage.  The first modal presented will be to enter feedback (`EnterFeedbackComponent`).  When the user enters feedback and clicks "Done", the `EnterFeedbackComponent` should be replaced by the `SubmitFeedbackComponent` in the existing modal (a new modal can be used as long as the transition is seamless to the user).  The `SubmitFeedbackComponent` should show the feedback entered on the previous screen.  When the user clicks "Make Changes", the user should return to `EnterFeedbackComponent` with their feedback prefilled.  When the user clicks "Submit", the modal should dismiss and the homepage should be shown.  No API call is needed to persist the feedback at this time.

### Design Requirements

See `AppComponent.png`, `EnterFeedback.png`, and `SubmitFeedback.png` in the root directory.

- Enter Feedback Modal should have a height of 600px and a width of 600px.
- Enter Feedback Modal should have a height of 600px and a width of 500px.
- When the browser height is less than 600px, the modal should be scrollable to view the entire content.
- When the browser width is less than the width of the modal, the modal should be fullscreen (`width:100%; height:100%`).

### Technical Requirements

- Use Angular `5.2.0^`.
- Use either [MatDialog](https://material.angular.io/components/dialog/overview) or the [Overlay CDK](https://material.angular.io/cdk/overlay/overview) to create and maintain the modal.

## Running The App

Fork this project on StackBlitz!

OR

Run `npm install` to install the boilerplate dependencies.

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Submission

Please provide a link to a forked StackBlitz project.