Angular CLI & Workspace Notes
What is Angular CLI?
Angular CLI is basically a tool that helps you create and manage Angular projects faster. Instead of making all the files manually, Angular can generate them for you automatically.
You use commands in the terminal like:
ng new my-project
This creates a new Angular project with all the files already set up.

What is a Workspace?
A workspace is the main folder that contains your Angular project.
Inside the workspace you have:


application files


settings/configuration files


installed packages


source code


You can also have multiple projects inside one workspace.

Important Files and Folders
src/
This is the most important folder because it contains the actual application code.
Inside it you usually have:
src/│├── app/├── index.html├── main.ts└── styles.css

app/
Contains components and application logic.
This is where most programming happens.

main.ts
The starting point of the Angular application.
Angular loads the app from here first.

index.html
Main HTML page.
Usually contains:
<app-root></app-root>
Angular replaces this with the real application.

styles.css
Global CSS styles for the whole application.

Important Root Files
angular.json
Configuration file for Angular CLI.
Controls:


build settings


serve settings


project settings


Basically tells Angular how the project should run.

package.json
Contains project dependencies and scripts.
Example:
"scripts": {  "start": "ng serve"}
Also stores libraries like:


Angular


TypeScript


RxJS



node_modules/
Contains all installed packages.
Usually very large.
You normally do not edit this folder manually.

Useful Angular CLI Commands
Create new project
ng new my-app
Creates a new Angular application.

Run application
ng serve
Starts the development server.

Generate component
ng generate component home
Shortcut:
ng g c home
Angular automatically creates:


HTML file


CSS file


TypeScript file


test file



Generate service
ng g s auth
Creates a service.

Components
Angular applications are built mostly using components.
A component usually has:


TypeScript file


HTML template


CSS styles


Example:
home.component.tshome.component.htmlhome.component.css

Standalone Components
Newer Angular versions use standalone components.
This means Angular applications can work without modules like AppModule.
Older Angular projects still use:
app.module.ts

Multiple Projects
Angular also supports multiple projects inside one workspace.
Example:
ng new my-workspace --no-create-application
Then create projects later:
ng g application admin-appng g library shared-lib
This is useful for larger companies or shared libraries.

Libraries
Libraries contain reusable code.
Example:


shared buttons


shared services


UI components


Create library:
ng g library my-lib

My Understanding
Angular CLI mainly exists to make development easier and faster. Instead of creating files and configurations manually, Angular generates everything automatically using commands. The src/app folder is where most of the actual development happens, while files like angular.json and package.json are mostly used for configuration.