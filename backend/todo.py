from peewee import *

db = SqliteDatabase('todo.db')

class Todo(Model):
    id = IntegerField(primary_key=True)
    taskName = TextField()
    isCompleted = BooleanField()

    class Meta:
        database = db 

def initialize_db():
    db.connect()
    # db.drop_tables([Product], safe = True)
    db.create_tables([Todo], safe = True)
    db.close()