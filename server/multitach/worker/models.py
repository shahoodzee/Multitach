from django.db import models
# Create your models here.


# worker table    
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
    password = models.CharField(max_length=128)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    workerType = models.CharField(max_length=20, choices=WORKER_CHOICES)
    
    

    # updated_at = models.DateTimeField(auto_add=True) 
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.name
    
    
  
  
# worker feedback table
class workerFeedback(models.Model):
    worker = models.ForeignKey(worker, related_name="feedbacks", on_delete=models.CASCADE) #forgien key
    comment = models.TextField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"Feedback for Worker ID: {self.worker.id}"
    
