import { suite } from 'uvu'
import * as assert from 'uvu/assert'

import type { Instance } from 'twind'
import type { VirtualSheet } from 'twind/sheets'

import { create } from 'twind'
import { virtualSheet } from 'twind/sheets'
import { lineClamp } from '.'

const test = suite<{
  sheet: VirtualSheet
  tw: Instance['tw']
}>('@twind/line-clamp')

test.before((context) => {
  context.sheet = virtualSheet()
  const { tw } = create({
    sheet: context.sheet,
    mode: 'strict',
    preflight: false,
    prefix: false,
    theme: {
      lineClamp: {
        card: '5',
      },
    },
    plugins: {
      'line-clamp': lineClamp,
    },
  })
  context.tw = tw
})

test.after.each(({ sheet }) => {
  sheet.reset()
})

test('using directive', ({ tw, sheet }) => {
  assert.is(tw(lineClamp(3)), 'tw-191o3sq')
  assert.equal(sheet.target, [
    '.tw-191o3sq{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}',
  ])

  sheet.reset()

  assert.is(tw(lineClamp('none')), 'tw-ub01xt')
  assert.equal(sheet.target, [
    '.tw-ub01xt{-webkit-line-clamp:unset}',
  ])

  sheet.reset()

  assert.is(tw(lineClamp('card')), 'tw-yguh2k')
  assert.equal(sheet.target, [
    '.tw-yguh2k{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5}',
  ])
})

test('using plugin', ({ tw, sheet }) => {
  assert.is(tw`line-clamp-3`, 'line-clamp-3')
  assert.equal(sheet.target, [
    '.line-clamp-3{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}',
  ])

  sheet.reset()

  assert.is(tw`line-clamp-none`, 'line-clamp-none')
  assert.equal(sheet.target, [
    '.line-clamp-none{-webkit-line-clamp:unset}',
  ])

  sheet.reset()

  assert.is(tw`line-clamp-card`, 'line-clamp-card')
  assert.equal(sheet.target, [
    '.line-clamp-card{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:5}',
  ])
})

test.run()
