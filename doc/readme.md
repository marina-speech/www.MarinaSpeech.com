

### setup

1) master repository is github

2) after change is pushed to github, travis will deploy site to aws s3  

### aws/travis config

https://medium.com/@michal.frystacky/static-site-github-to-s3-770953a90f67

### how to update aws key

```
gem install travis
cd /home/work/source/git/www.MarinaSpeech.com
travis encrypt --add deploy.secret_access_key secret_access_key=”AWS-SECRET-KEY”
```
