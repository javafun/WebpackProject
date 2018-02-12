# UpStarMusic
Starter Repo for a Webpack course on Udemy

You can download this repository by using the green `Clone or Download` button on the right hand side of this page.  This will present you with the option to either clone the repository using Git, or to download it as a zip file.

If you want to download it using git, copy paste the link that is presented to you, then run the following at your terminal:

```
git clone https://github.com/StephenGrider/WebpackProject.git
cd WebpackProject
npm install
```

## Update github pages

```
git push origin `git subtree split --prefix dist master`:gh-pages --force
```

## Surge hosting

1. Install Surge
```
  npm install -g surge
```
2. Deploy to Surge
```
    surge -p dist
```