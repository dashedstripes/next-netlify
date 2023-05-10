if [[ $(date +%u) -gt 5 ]]; then
    echo 'Cannot build during weekends.'
    exit 0
fi