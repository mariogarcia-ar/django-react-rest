from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    done = models.BooleanField()
    # created_at = models.DateTimeField(auto_now_add=True)   

    def __str__(self):
        return str(self.id) + ' - ' + self.title        