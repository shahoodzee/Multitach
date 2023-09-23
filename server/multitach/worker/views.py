from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password, check_password

from .models import worker
from .serializers import WorkerSerializer, LoginSerializer


# Create a new worker
@api_view(['POST'])
def create_worker(request):
    if request.method == 'POST':
        serializer = WorkerSerializer(data=request.data)
        if serializer.is_valid():
            # Hash the password before saving
            password = serializer.validated_data.get('password')
            hashed_password = make_password(password)
            serializer.validated_data['password'] = hashed_password
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Retrieve all workers
@api_view(['GET'])
def get_workers(request):
    if request.method == 'GET':
        workers = worker.objects.all()
        serializer = WorkerSerializer(workers, many=True)
        
        # Decrypt the password (if needed)
        # password = serializer.data.get('password')  
        # Check if the password field contains a hashed password
        # if not password.startswith(('pbkdf2_sha256$', 'bcrypt', 'argon2')):
        #     # If it doesn't start with a recognized hash identifier, assume it's plain text
        #     # You may want to handle this differently based on your requirements
        #     password = make_password(password)
        #     serializer.data['password'] = password
        
        return JsonResponse(serializer.data, safe=False)

# Retrieve a single worker by ID
@api_view(['GET'])
def get_worker(request, worker_id):
    if request.method == 'GET':
        worker_instance = get_object_or_404(worker, pk=worker_id)
        serializer = WorkerSerializer(worker_instance)
        
        # Decrypt the password (if needed)
        password = serializer.data.get('password')
        # Check if the password field contains a hashed password
        if not password.startswith(('pbkdf2_sha256$', 'bcrypt', 'argon2')):
            # If it doesn't start with a recognized hash identifier, assume it's plain text
            # You may want to handle this differently based on your requirements
            password = make_password(password)
            serializer.data['password'] = password
        
        return JsonResponse(serializer.data)

# Update a worker by ID
@api_view(['PUT'])
def update_worker(request, worker_id):
    if request.method == 'PUT':
        worker_instance = get_object_or_404(worker, pk=worker_id)
        serializer = WorkerSerializer(worker_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Delete a worker by ID
@api_view(['DELETE'])
def delete_worker(request, worker_id):
    if request.method == 'DELETE':
        worker_instance = get_object_or_404(worker, pk=worker_id)
        worker_instance.delete()
        return JsonResponse({'message': 'Worker deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def login_worker(request):
    if request.method == 'POST':
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']

            workeri = worker.objects.get(email=email)
            if workeri is not None:
                if check_password(password,workeri.password):
                    return JsonResponse({'message': workeri.id})
                else:
                    return JsonResponse({'message':'wrong password'})
                
                

##CRUD OPERATIONS FOR FEEDBACK