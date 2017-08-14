
### design

web site source files are hosted on github.
public web site is hosted as amazon aws s3 bucket.
travis build system is used to deploy from github into amazon.

### operation

1) make changes to web site files in this github repository, and push

2) after change is pushed to github, travis will deploy site to aws s3, in 1...3 minutes

3) verify deploy status in travis: https://travis-ci.org/marina-speech/www.MarinaSpeech.com

4) verify deploy changes in aws s3: https://s3.console.aws.amazon.com/s3/buckets/www.marinaspeech.com

5) verify actual visible changes in the production site: http://www.marinaspeech.com

example editing session:
```
git clone git@github.com:marina-speech/www.MarinaSpeech.com.git
cd www.MarinaSpeech.com
echo '<!-- edit-test -->' >> index.html
git status
git add .
git commit -m "test edit"
git push
sleep 120
wget -q -O- http://www.marinaspeech.com | grep 'edit-test'

```

### aws/travis configuration

https://medium.com/@michal.frystacky/static-site-github-to-s3-770953a90f67

### how to encrypt aws key for travis

```
gem install travis
cd /home/work/source/git/www.MarinaSpeech.com
travis setup s3 --force
```
