## Task 9 Docker and AWS Elastic Beanstalk

### Evaluation criteria (70 points for covering all criteria)
- Dockerfile is prepared, image is building. Image size is minimized to be less than 500 MB.
- Dockerfile is optimized. Files that change more often and commands that depend on them should be included later, files and commands that change less should be at the top.
- Folders are added to .dockerignore, with explanations. At least 2 big directories should be excluded from build context. Elastic Beanstalk application is initialized.

### Additional (optional) tasks
- ✔️ 15 - Environment is created and the app is deployed to the AWS cloud. You must provide a link to your GitHub repo with Cart Service API or PR with created Dockerfile and related configurations.
- ✔️ 15 - FE application is updated with Cart API endpoint. You must provide a PR with updates in your FE repository and OPTIONALLY link to deployed front-end app which makes proper API calls to your Cart Service.

### LINKS:
- FE: https://d17hlkvoaz74v8.cloudfront.net/
- API: http://viktarius-cart-api-dev.us-east-1.elasticbeanstalk.com/
- API for get orders: http://viktarius-cart-api-dev.us-east-1.elasticbeanstalk.com/api/v3/orders

### The score: 100 / 100
