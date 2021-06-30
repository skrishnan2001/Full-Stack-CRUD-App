from django.db import models


class User(models.Model):
    name = models.CharField(max_length=100)
    user_id = models.CharField(max_length=4)
    username = models.CharField(max_length=20)
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=50)
    role = models.CharField(max_length=50)


# Create/Insert/Add : POST
# Retrieve/Fetch : GET
# Update/Edit : PUT
