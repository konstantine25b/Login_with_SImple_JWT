from rest_framework import serializers
from base.models import Note  # Import your Note model

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note  # Specify the model that the serializer should serialize
        fields = '__all__'  # Optionally, specify the fields to include in the serialization