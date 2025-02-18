/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { IReduxState } from 'exports/store/interfaces';

export function getUserState(state: IReduxState) {
  return state.user;
}

export function getUserTimeZone(state: IReduxState): string | undefined {
  return state.user.info?.timeZone ?? undefined;
}

export function getUserLocale(state: IReduxState): string | undefined {
  const locale = state.user.info?.locale ?? undefined;
  if (locale) {
    return locale.toLowerCase().split('_').join('-');
  }
  return undefined;
}
