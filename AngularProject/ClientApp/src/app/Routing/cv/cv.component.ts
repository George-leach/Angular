import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements AfterViewInit {
  @ViewChild('viewer',{ static: false }) viewerRef: ElementRef;

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../assets/Libary',
      initialDoc: '../../assets/George CV 2020 for project.pdf'
    }, this.viewerRef.nativeElement).then(instance => {
    });
  }

}
