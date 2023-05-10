if [[ $(date +%u) -lt 6 ]]; then
    echo 'Cannot build during weekdays.'
    exit
fi