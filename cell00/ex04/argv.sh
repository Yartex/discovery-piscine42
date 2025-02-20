#!/bin/bash

if [ $# = 0 ]
then
	echo "aucune valeur n'a ete rentree."
else
	echo $1'\n'$2'\n'$3
fi
