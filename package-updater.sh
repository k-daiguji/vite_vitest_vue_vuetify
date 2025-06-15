echo "Checking for outdated packages in node_modules..."
npm outdated
packages=$(npm outdated | grep node_modules | sed 's/\([a-z]\)\s\+\([0-9.]\+\)\s\+\([0-9.]\+\)\s\+\([0-9.]\+\).*/\1,\2,\3,\4/')

while true; do
  read -p "Select an option:
  1. Update all packages to the latest version
  2. Update all packages to the wanted version
  3. Exit
  Enter your choice (1-3): " choice
  case $choice in
    1)
      echo "Updating all packages to the latest version..."
      for package in $packages
      do
        array=(${package//,/ })
        name=${array[0]}
        current_version=${array[1]}
        latest_version=${array[3]}
        echo "Updating $name from $current_version to $latest_version"
        npm i $name@$latest_version > /dev/null
        sed -i "s/$name-$current_version/$name-$latest_version/" README.md > /dev/null
        echo "Updated $name to version $latest_version"
      done
      sed -i "s/$/\r/" README.md
      echo "All packages updated to the latest version."
      break;;
    2)
      echo "Updating all packages to the wanted version"
      for package in $packages
      do
        array=(${package//,/ })
        name=${array[0]}
        current_version=${array[1]}
        wanted_version=${array[2]}
        echo "Updating $name from $current_version to $wanted_version"
        npm i $name@$wanted_version > /dev/null
        sed -i "s/$name-$current_version/$name-$wanted_version/" README.md > /dev/null
        echo "Updated $name to version $wanted_version"
      done
      sed -i "s/$/\r/" README.md
      echo "All packages updated to the wanted version."
      break;;
    3)
      echo "Exited."
      break;;
  esac
done
