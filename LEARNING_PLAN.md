# ToDo App Learning Plan (Updated)
Duration: 15 days (1 hour/day)
Goal: Build a ToDo App using HTML, CSS, JavaScript, PHP, MySQL, with semantic HTML and proper project structure.

## Week 1 – HTML & CSS (Days 1–5)
| Day | Focus | Book Section | Exercises |
|-----|-------|--------------|-----------|
| 1 | Project setup, basic HTML structure | HTML & CSS: Chapters 1–2 | Create index.html with <html>, <head>, <body> |
| 2 | Headings, paragraphs, semantic elements | HTML & CSS: Chapter 3 | Use <header>, <footer>, <section>, <article>, <main> |
| 3 | CSS basics: colors, fonts, styling input/button/list | HTML & CSS: Chapters 4–5 | Style input, button, ul, li |
| 4 | Layout: Flexbox/Grid, margins, padding | HTML & CSS: Chapters 6–7 | Create a clean layout for your ToDo app |
| 5 | Mini-project: Static ToDo page layout | HTML & CSS: Chapter 8 | Build the full static layout using semantic tags |

## Week 2 – JavaScript & localStorage (Days 6–10)
| Day | Focus | Book Section | Exercises |
| 6 | Add tasks dynamically to <ul> | JavaScript & jQuery: Chapters 1–3 | Write JS to add tasks on button click |
| 7 | Delete tasks, toggle completed | JavaScript & jQuery: Chapters 4–5 | Add click events to toggle line-through and delete |
| 8 | Store tasks in localStorage | JavaScript & jQuery: Chapter 6 | Save tasks array in localStorage |
| 9 | Load tasks from localStorage | JavaScript & jQuery: Chapter 6 | Populate <ul> from saved tasks on page load |
| 10 | Optional: Edit tasks, task counters, mini enhancements | JavaScript & jQuery: Chapters 7–8 | Implement edit functionality and task counter |

## Week 3 – PHP & MySQL (Days 11–15)
| Day | Focus | Book Section | Exercises |
| 11 | Setup XAMPP, database todoapp | PHP & MySQL: Chapters 1–2 | Create MySQL database and tasks table |
| 12 | PHP: Add task to MySQL | PHP & MySQL: Chapter 4 | Write add_task.php to insert task |
| 13 | PHP: Get tasks from MySQL, display in HTML | PHP & MySQL: Chapter 5 | Write get_tasks.php to fetch tasks |
| 14 | PHP: Delete task from MySQL | PHP & MySQL: Chapter 6 | Write delete_task.php to remove tasks |
| 15 | Combine all, test full app, backup tasks | PHP & MySQL: Chapters 7–8 | Test full app with frontend + backend, use todo_sync.py to backup |

### Notes on Semantic HTML
- <header> for top section (title/navigation)
- <main> for main ToDo content
- Wrap tasks in <section> or <article> if grouping multiple items
- <footer> for app info or footer content
