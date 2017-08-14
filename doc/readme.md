

### setup

1) master repository is this github repo

2) after change is pushed to github, travis will deploy site to aws s3

3) verify deploy status in travis: https://travis-ci.org/marina-speech/www.MarinaSpeech.com

4) verify deploy status in aws s3: https://s3.console.aws.amazon.com/s3/buckets/www.marinaspeech.com

5) verify deploy status in production site: http://www.marinaspeech.com

### aws/travis config

https://medium.com/@michal.frystacky/static-site-github-to-s3-770953a90f67

### how to update aws key

```
gem install travis
cd /home/work/source/git/www.MarinaSpeech.com
travis encrypt --add deploy.secret_access_key secret_access_key="AWS-SECRET-KEY"
```
