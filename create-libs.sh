 #!/bin/bash
npx nx generate @nrwl/react:library ui --directory=shared --importPath=@shared/ui --standaloneConfig --no-interactive
npx nx generate @nrwl/react:library utils --directory=shared --importPath=@shared/utils --standaloneConfig --no-interactive

npx nx generate @nrwl/react:library players --directory=squad --importPath=@squad/players --standaloneConfig --no-interactive
npx nx generate @nrwl/react:library tickets --directory=squad --importPath=@squad/tickets --standaloneConfig --no-interactive
npx nx generate @nrwl/react:library stats --directory=squad --importPath=@squad/stats --standaloneConfig --no-interactive

npx nx generate @nrwl/react:library tickets --directory=store --importPath=@store/tickets --standaloneConfig --no-interactive
npx nx generate @nrwl/react:library merchandise --directory=store --importPath=@store/merchandise --standaloneConfig --no-interactive
