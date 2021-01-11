from django.contrib import admin
from api.models import Activity, Task, Enroll

class TaskInline(admin.TabularInline):
    model = Task
 
class ActivityAdmin(admin.ModelAdmin):
    list_display = ('atype1', 'atype2') # list
    search_fields = ('atype1', 'atype2')
    #inlines = [TaskInline]  # Inline
    #fieldsets = [
        #('Main',{
         #   'fields':('aid', 'atype1', 'atype2'),
       # }),
       # ('Advance',{
        #    'tasknum': ('tasknum',),
         #   'tasksum': ('tasksum',),
        #})
 
    #]
    fields = ('atype1', 'atype2')
 
admin.site.register(Activity, ActivityAdmin)
admin.site.register([Task, Enroll])

# Register your models here.
