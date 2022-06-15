#!/bin/sh -l

echo "::debug ::Debug Message"
echo "::warning ::Warning Message"
echo "::error ::Error Message"
echo "::add-mask::$1"
echo "Hello $1"

time=$(date)
echo "::set-output name=time::$time"

echo "::group::Some exandable logs"

echo "other"
echo "other"
echo "::endgroup::"

exit 1

# echo "::set-env name=HELLO::hello"