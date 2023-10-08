from rest_framework import serializers
from worker.models import worker  



class WorkerSerializer(serializers.ModelSerializer):
  class Meta:
    model = worker 
    fields = '__all__'
    
class LoginSerializer(serializers.Serializer):
  email = serializers.EmailField()
  password = serializers.CharField(write_only=True)  # Use write_only to prevent password from being included in responses   
  
  
# class WorkerFeedbackSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = workerFeedback 
#     fields = '__all__'   