import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import { EventDispatcher } from '@angular/core/primitives/event-dispatch';

@Directive({
  selector: '[dnd]'
})
export class Dnd {

  @Output() fileDropped = new EventEmitter<File>()

  @HostBinding('class.fileover')
  fileover = false

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault()
    event.stopPropagation()
    this.fileover = true
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault()
    event.stopPropagation()
    this.fileover = false
  }

  @HostListener('drop', ['$event'])
  onDragDrop(event: DragEvent) {
    event.preventDefault()
    event.stopPropagation()
    this.fileover = false

    this.fileDropped.emit(event.dataTransfer?.files[0])
  }
}
