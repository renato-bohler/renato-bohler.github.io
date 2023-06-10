npx nu-html-checker -f json ./out/index.html > ./validation-report.json
ERROR_COUNT=$(cat ./validation-report.json | grep '"type": "error"' -c)

if [ $ERROR_COUNT = 0 ]; then
  echo "No errors found"
  exit 0
else
  cat ./validation-report.json
  echo "$ERROR_COUNT error(s) found!"
  exit 1
fi