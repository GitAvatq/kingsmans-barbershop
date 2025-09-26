    ## Git Flow
    ![[Pasted image 20250801112220.png]]

    ### Команды:
    Через `git flow`:
    - `git flow [branch] start [branch_name]`
    - `git flow [branch] finish [branch_name]`
    	Пример:
    ```
    git flow feature start header-block
    git flow feature finish header-block
    ```
    Через `git branch`:

    Порядок работы:
    1. Переключение на dev ветку:
    `git checkout dev`
    2. Инициализация работы фичи:
    `git flow feature start header-block`
    3. Завершение работы фичи:
    `git flow feature finish header-block`
    4. Пуш на продакшн:
    ```
    git push -u origin dev
    git checkout main
    git pull origin dev
    git push -u origin main
    ```

    **‼️‼️‼️После того как работа над блоком была закончена, надо обязательно упомянуть об этом, также надо спросить были ли запушены изменения, чтобы не было конфликтов. ‼️‼️‼️**
    ## Git Branch Naming
    Main - Продакшн
    Dev - Тестируемая и разрабатываемая ветка
    Feature - Особенность
    Hotfix - Исправление критических проблем
    Bugfix - Исправление бага


    ## Литература:
    Git Flow: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow
    Branch Naming: https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534
