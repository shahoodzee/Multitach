from django.db import models
# Create your models here.

class worker(models.Model):
    
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]
    
    WORKER_CHOICES = [
        ('Electrician', 'Electrician'),
        ('Plumber', 'Plumber'),
        ('Carpenter', 'Carpenter'),
        ('Goldsmith', 'Goldsmith'),
        ('Blacksmith', 'Blacksmith'),
        ('Other', 'Other'),
    ]
    
    
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    workerType = models.CharField(max_length=20, choices=WORKER_CHOICES)

    # updated_at = models.DateTimeField(auto_add=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.name
    
    
     