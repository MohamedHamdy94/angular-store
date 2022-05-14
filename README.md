git init
git add .
git commit -m "Initial Commit"
git remote add origin https://github.com/<username>/<reponame>.git
git push -u origin master

npm install -g angular-cli-ghpages
 

ng build --prod --base-href "https://MohamedHamdy94.github.io/angular-store/"

ngh --dir dist/angular-store

https://MohamedHamdy94.github.io/angular-store/