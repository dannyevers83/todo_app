#!/usr/bin/env python3
import os, subprocess
SRC=os.path.expanduser('~/projects/todo_app/')
DEST='/opt/lampp/htdocs/todo_app/'
def sync():
    subprocess.run(['rsync','-av','--delete',SRC,DEST])
    print("Sync complete!")
if __name__=='__main__':
    sync()