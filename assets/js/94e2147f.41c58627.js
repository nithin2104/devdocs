"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[39062],{51861:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return u}});var o=a(83117),n=a(80102),l=(a(67294),a(3905)),s=a(13904),i=["components"],r={title:"Moodle 1.7",tags:["Release notes","Moodle 1.7"],sidebar_position:-107,moodleVersion:"1.7"},d=void 0,m={unversionedId:"releases/1.7",id:"releases/1.7",title:"Moodle 1.7",description:"Moodle 1.7",source:"@site/general/releases/1.7.md",sourceDirName:"releases",slug:"/releases/1.7",permalink:"/devdocs/general/releases/1.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 1.7",permalink:"/devdocs/general/tags/moodle-1-7"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1654255737,formattedLastUpdatedAt:"03/06/2022",sidebarPosition:-107,frontMatter:{title:"Moodle 1.7",tags:["Release notes","Moodle 1.7"],sidebar_position:-107,moodleVersion:"1.7"},sidebar:"releaseNotes",previous:{title:"Moodle 1.8.14",permalink:"/devdocs/general/releases/1.8/1.8.14"},next:{title:"Moodle 1.7.1",permalink:"/devdocs/general/releases/1.7/1.7.1"}},p={},u=[{value:"Moodle 1.7",id:"moodle-17",level:2},{value:"Headline features",id:"headline-features",level:3},{value:"Module improvements",id:"module-improvements",level:3},{value:"Enrolment plugin improvements",id:"enrolment-plugin-improvements",level:3},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,o.Z)({frontMatter:r},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("h2",{id:"moodle-17"},"Moodle 1.7"),(0,l.kt)("p",null,"Release date: 7th November, 2006"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/ReleaseNote.jspa?version=10120&styleName=Html&projectId=10011&Create=Create"},"This page shows details about issues resolved in this version")),(0,l.kt)("h3",{id:"headline-features"},"Headline features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Roles"},"Roles"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Permissions based on fine-grained capabilities allow all kinds of roles to be created and assigned in all contexts around Moodle. This creates a great deal more flexibility in the permissions that you can grant to people."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/XMLDB_Documentation"},"XML Database Schema"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"added support for MS-SQL and Oracle with more databases to come. Developers now have just one XML file to edit when changing the database structure, and there is even a very funky editor for this file built-in to Moodle"))),(0,l.kt)("li",{parentName:"ul"},"New Admin interface",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Completely new admin interface, with accessible design and cool features to make access to settings fast and easy."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Unit_tests"},"Unit testing framework"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Making it easier for developers to write test code, which should ultimately lead to a more reliable Moodle."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/AJAX"},"AJAX")," Course editing (STILL UNSTABLE IN 1.7 RELEASE AND OFF BY DEFAULT, USE WITH CAUTION!)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The Topics and Weekly course formats now feature AJAX editing which means you can drag drop blocks, activities and sections (weeks/topics) and it all happens instantly. No more page reloading!")))),(0,l.kt)("h3",{id:"module-improvements"},"Module improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Improvements to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Assignment_module"},"Assignment module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"New type Advanced uploading of files"))),(0,l.kt)("li",{parentName:"ul"},"Improvements to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Database_module"},"Database module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Template/Field settings can now be saved as Presets and shared across a site."),(0,l.kt)("li",{parentName:"ul"},"Presets are just zip files, and can also be shared between sites."),(0,l.kt)("li",{parentName:"ul"},"Moodle 1.7 comes with one sample preset (an Image Gallery) with more to come."),(0,l.kt)("li",{parentName:"ul"},"New latitude/longitude data type"))),(0,l.kt)("li",{parentName:"ul"},"Improvements to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Lesson_module"},"Lesson module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Now has a more unified view of lesson screens."),(0,l.kt)("li",{parentName:"ul"},"Teacher editing:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Collapsed view has a nicer format, displays more information regarding each page and allows the creation of new pages."),(0,l.kt)("li",{parentName:"ul"},"Editing is now speedier by replacing 3 second redirect delays with a notification system."))),(0,l.kt)("li",{parentName:"ul"},"New feature: display default feedback.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Default is ",(0,l.kt)("strong",{parentName:"li"},"On")," so previous lessons behave as before."),(0,l.kt)("li",{parentName:"ul"},"Description: if no ",(0,l.kt)("em",{parentName:"li"},"response")," is entered for a question answer and this setting is turned ",(0,l.kt)("strong",{parentName:"li"},"Off"),", then the user skips the feedback page."))),(0,l.kt)("li",{parentName:"ul"},"Graceful degrade of JavaScript."),(0,l.kt)("li",{parentName:"ul"},"Several bug fixes."))),(0,l.kt)("li",{parentName:"ul"},"Improvements to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Quiz_module"},"Quiz module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The teacher can configure comments that are displayed to the student at the end of their attempt, with the comment displayed depending on the student's score."))),(0,l.kt)("li",{parentName:"ul"},"Improvements to some core question types",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"All question types can now have some general feedback. This is displayed to all students after they have finished the question (depending on the quiz settings) and does not depend on what response the student gave. Use this to tell the student what the question was about, or link them to more information about the topic it covers."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Matching_question_type"},"Matching")," questions can have extra wrong answers, and work when two questions have the same answer."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Multiple_Choice_question_type"},"Multiple Choice")," questions can have feedback for the whole question, as well as specific answers. This is particularly useful for multiple-response questions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Numerical_question_type"},"Numerical")," questions can have different answers with different precisions and scores. (Previously this was only supported via GIFT import. Now you can edit questions like this.)"))),(0,l.kt)("li",{parentName:"ul"},"Improvements to the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Wiki_module"},"Wiki module"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"While editing a wiki page it is now locked so that others cannot try to change it at the same time. Teachers can override the lock."),(0,l.kt)("li",{parentName:"ul"},"Minor bugfixes (mostly to fix problems that occured when using Postgres database).")))),(0,l.kt)("h3",{id:"enrolment-plugin-improvements"},"Enrolment plugin improvements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Authorize.net_Payment_Gateway"},"Authorize.net Payment Gateway")," enrolment plugin",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Accepts 'Electronic Checks (ACH)'. After a user approving echeck, an admin who has upload csv capacity must import a CSV file to get the user enrolled in the Payment Management page."),(0,l.kt)("li",{parentName:"ul"},"Autoconfigures credit card and echeck types if the merchant does not accept some types of them.")))),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/de/Moodle_1.7_Versionsinformationen"},"Moodle 1.7 Versionsinformationen")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_1.7"},"Notas de Moodle 1.7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_1.7"},"Notes de mise \xe0 jour de Moodle 1.7"))))}h.isMDXComponent=!0}}]);