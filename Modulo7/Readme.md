portal.azure.com

install gh-pages
"deploy": "gh-pages -d dist"

Create folder:
.github/workflows
cd.yml

```
name: Continuous Deployment workflow

on:
    push:
        branches:
        - master

jobs:
    cd:
        runs-on: ubuntu-latest
        steps:
        -   name: Checkout repository
            uses: actions/checkout@v2
        -   name: Use SSH key
        -   run: |
                mkdir -p ~/.ssh/
                echo "${{secrets.SSH_PRIVATE_KEY}}" > ~/.ssh/id_rsa
                sudo chmod 600 ~/.ssh/id_rsa
        -   name: Git config
            run: |
                git config --global user.email "raulcapillas@gmail.com"
                git config --global user.name "raulcapillas"
        -   name: Install
            run: npm install
        -   name: Build
            run: npm run build
        -   name: Deploy
            run: npm run deploy -- -r git@gitub.com:rcapillas/master-action-pages.git
```

ssh-keygen -m PEM -t rsa -C "raulcapillas@gmail.com"