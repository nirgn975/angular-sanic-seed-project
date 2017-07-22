from locust import HttpLocust, TaskSet, task


class UserBehavior(TaskSet):
    @task(1)
    def users(self):
        self.client.login(username='admin', password='pass')
        self.client.get('/api/users', serlf.headers)


class WebsiteUser(HttpLocust):
    task_set = UserBehavior
    min_wait = 5000
    max_wait = 9000
