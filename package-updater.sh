echo "Checking for outdated packages in node_modules..."
npm outdated

packages=$(npm outdated | grep node_modules | sed 's/\([a-z0-9]\)\s\+\([0-9.]\+\)\s\+\([0-9.]\+\)\s\+\([0-9.]\+\).*/\1,\2,\3,\4/')
if [ -n "${packages}" ]; then
  update_packages
else
  echo "No outdated packages found."
fi

update_packages() {
  while true; do
    read -p "Select an option:
    1. Update all packages to the latest version
    2. Update all packages to the wanted version
    3. Exit
    Enter your choice (1-3): " choice
    case $choice in
      1)
        echo "Updating all packages to the latest version..."
        update_versions 3
        update_files
        echo "All packages updated to the latest version."
        break;;
      2)
        echo "Updating all packages to the wanted version"
        update_versions 2
        update_files
        echo "All packages updated to the wanted version."
        npm outdated
        break;;
      3)
        echo "Exited."
        break;;
    esac
  done
}

update_versions () {
  npm update > /dev/null
  for package in $packages
  do
    array=(${package//,/ })
    name=${array[0]}
    current_version=${array[1]}
    next_version=${array[$1]}
    echo "Updating $name from $current_version to $next_version"
    npm i $name@$next_version > /dev/null
    sed -i "s/$name-$current_version/$name-$next_version/" README.md > /dev/null
    echo "Updated $name to version $next_version"
    if [ ${name} = "electron" ]; then
      echo "Electron was updated, please check the release notes for node version compatibility."
      start chrome "https://releases.electronjs.org/release"
    fi
  done
}

update_files() {
  echo "Updating README.md"
  sed -i "s/$/\r/" README.md
  echo "Updated README.md"

  echo "Updating package-lock.json"
  rm -rf package-lock.json node_modules/
  npm i > /dev/null
  echo "Updated package-lock.json"
}