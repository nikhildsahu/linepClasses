#include <unistd.h>
#include <fcntl.h>
#include <stdlib.h>
#include <stdio.h>
#include <sys/stat.h>
#include <sys/types.h>





int main() {


struct stat j,k;
        int fd1, fd2,e,s,d,f;
  
char b1[20],b2[20],b3[20];

     fd1 = open("a.txt", O_RDONLY);   

     e=fstat(fd1,&k);
  

printf("************FSTAT***********");
 printf(" \n NAME : a.txt");

 printf(" \n SIZE   %d",k.st_size);

 printf(" \n TIME CHANGE LAST STAUS   %d",k.st_ctime);
 printf(" \n USER ID   %d",k.st_dev);
 printf(" \n GROUP  ID   %d",k.st_gid);



/////////////////////////////////////////////////////////


     f=stat("a.txt",&j);


printf("\n************ STAT ************");

 printf(" \n NAME : a.txt");
 printf(" \n SIZE   %d",j.st_size);
printf(" \n TIME CHANGE LAST STAUS   %d",j.st_ctime);
 printf(" \n USER ID   %d",j.st_dev);
 printf(" \n GROUP  ID   %d",j.st_gid);




fd2=dup(fd1);


read(fd2,b2,5);



printf("\n*********DUP************\n%s\n",b2);











  return 0;















}
