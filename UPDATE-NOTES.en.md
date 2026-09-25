## 0.1.7
### Polished settings and item details, and fixed items disappearing

- If time-of-day ranges overlap or are out of order, a note appears under that row and the change isn't saved.
- Settings are now grouped into cards, with a bar showing your day's time ranges at a glance. Times use the 24-hour format.
- Item details no longer use "?" help. Field names and choices say what they do, and one line shows the result of your choice.
- Reminder and remaining-count fields, which are still in the works, are hidden for now. Values you already set are kept.
- Fixed items disappearing after entering an out-of-range number for a goal count or interval. You now see a note under the field.
- Fixed times and dates being cut off on narrow screens, and removed the version line at the bottom of Settings.

## 0.1.6
### Improved the UI and small features

- Fixed an issue where some screens, like settings, lacked right margins and updated all screens to follow consistent layout rules.
- You can now tap anywhere on a topic card in the summary view to open that topic. Previously, only the very top line was clickable.
- Typing "Creatine after workout" automatically assigns "after workout" as the note and "Creatine" as the item name. This also applies to phrases like "before shower" and "right after waking up."
- Items with units like "5g," "1 scoop," or "1000mg" are automatically categorized under Medications/Supplements. Once a name is categorized there, it will automatically go to the same section next time.
- Clarified column names in the item details view and added a "?" icon next to confusing fields to show definitions and examples when tapped. It also explains what your selected option means in a single line below the field.
- Labeled the date range fields as "Start Date" and "End Date," and the app will instantly alert you if the end date is earlier than the start date.
- Fixed the fixed expenses duration counter: entering a start date now correctly tracks "X months active" starting from that specific date. Previously, it counted from the month added, displaying "Starts this month."
- Updated the home screen icon to the new design and added app version details at the very bottom of the settings screen.

## 0.1.5
### Updated the home screen name and icon, and made the quick add smarter

- Fixed an issue where adding the app to the home screen displayed the old name (do-it) and icon. It now correctly installs as "Do-It" with the new icon.
- Typing dates like "Recycling tomorrow" or "Dentist Sept 30" automatically schedules it as a single-day task. Adding "by" will still set it as a deadline like before.
- Entering non-medication tasks in the Medications/Supplements view routes them to General Tasks, while typing a supplement name anywhere else automatically puts it in Medications/Supplements.
- When importing a backup, the app now shows a table comparing your backup records side-by-side with your current device records so you can see exactly what changes.
- Added a warning to the backup section in settings for iOS users: deleting the home screen icon erases your local data. Please export your data to a file before removing the icon.

## 0.1.4
### Fine-tuned the experience to feel more like a native app

- Sharpened the home screen icon and set the default installation name to "Do-It."
- You can now toggle a notification badge in settings to see your remaining tasks for today directly on the home screen icon.
- Reduced stuttering when swiping quickly between topics and prevented the screen from shifting over when pulling past the first or last topic.
- Terms used exclusively for payments, like "Rent" or "Maintenance fee," are automatically categorized as fixed expenses and display relevant examples.
- Enhanced haptic feedback so you get a subtle click sensation when tapping, and a vibration when holding down to complete a task (requires iOS 18 or later for iPhone).

## 0.1.3
### Cleaned up the splash screen, top layout, and link sharing previews

- Smoothed out the splash screen experience by making the logo fade in and out gracefully, eliminating the initial logo flicker.
- Fixed layout issues where the splash screen or topic screens would appear cut off halfway when switching the device to landscape mode.
- Expanded the app layout on the home screen to fill the entire display, stretching all the way to the status bar (clock and battery area). If you already added the app, you will need to re-add it to apply this change. iPhone users should back up their data before doing this.
- Sharing the app link via messaging apps now displays a preview image and a summary description of Do-It.

## 0.1.2
### Optimized behaviors for a more native app feel

- Fixed an issue where menus like settings would drift horizontally when swiping near the edges.
- Disabled double-tap to zoom and pinch-to-zoom gestures to prevent accidental screen scaling.
- Disabled text selection when long-pressing guide banners, while keeping text selection fully functional within input fields.

## 0.1.1
### Polished the splash screen

- Extended the display time of the splash screen slightly for a smoother transition, and added the ability to tap to skip it instantly.
- Fixed a bug where a residual background color remained at the bottom of the screen after the splash screen faded out.

## 0.1.0
### Do-It is officially live!

- Displays one task per screen to help you focus. Simply press and hold to mark a task complete, or hold again to undo.
- Double-tap anywhere to quickly add a task in one line. Typing phrases like "Evening Lutein 1 pill" or "Netflix 25th monthly 17000 KRW" automatically parses the time, count, and price into their respective fields.
- Easily swipe horizontally to switch between topics like Medications/Supplements, Routines, Intervals, and Goals, and swipe vertically to cycle through individual cards within a topic.
- Groups fixed expenses like subscriptions, insurance, and phone bills by category to show your total monthly spending and upcoming due dates.
- Pull down the top title bar to reveal your daily summary, where you can also customize time slots and gesture guides.
- Open the link in your mobile browser to use it instantly without any installation, and add it to your home screen to use it just like a native app.
- All records are saved securely directly on your device. You can back up your data by exporting it to a file in settings and restore it easily when switching devices.
