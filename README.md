## BLANK_TEMPLATE

Basic frontend template for projects using HTML, CSS, jQuery, and Bootstrap.

First make sure you're in the correct starting dir:
``` bash
cd ~/dev
```

Next lets clone this down.  Since you might use this more than once, you should rename it.  Try renaming when you clone by replacing `your_project_name`:

``` bash
git clone CLONE_URL your_project_name
```
After you have cloned and renamed your repo, cd into the folder. 
```bash
cd your_project_name
```
Next check your git remote origin.
```bash
git remote -v
```

It is pointing to the blank_template repo but you want it to point to your own repo. You need to remove the current remote and place your own in.
```bash
git remote remove origin
```
Next go to your Github page and make a new repo with the same name you just created locally. **Don't click Initialize this repository with a README**. Create Repo, then you will see two options, choose the second " push an existing repository from the command line" follow the instructions

```bash
git remote add origin your_github_project.git
git push -u origin master
```
